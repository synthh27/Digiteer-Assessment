using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManager.Data;
using TaskManager.DTOs;
using TaskManager.Helpers;
using TaskManager.Models;
using TaskManager.Services;


namespace TaskManager.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly JwtService _jwtService;

        public AuthController(ApplicationDbContext context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        [HttpGet("{id}")]
        private async Task<IActionResult> Get(int id)
        {
            // GETS USER
            var user = await _context.Users.FindAsync(id);

            //RETURN 404 IF USER DO NOT EXIST
            if (user is null) return NotFound("User do not exist.");

            return Ok(user);
        }

        [HttpPost("register")]
        public async Task<IActionResult> register(AuthRequest request)
        {
            // CHECK IF EMAIL EXIST
            var isExistingUser = await _context.Users.AnyAsync(u => u.Email == request.Email);

            // RETURN 409 IF EMAIL ALREADY USED.
            if (isExistingUser) return Conflict("Email already used");

            // CREATES NEW USER
            var newUser = new User
            {
                Email = request.Email,
                PasswordHash = Utility.HashPasword(request.Password)
            };

            // CREATE NEW JWT TOKEN
            var token = _jwtService.GenerateToken(newUser);

            // SAVES USER TO DATABASE
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            // RETURN 201 CREATION SUCCESS RESPONSE
            return CreatedAtAction(
                nameof(Get),
                new{ Id = newUser.Id },
                new AuthResponse(
                    "User registered successfully.",
                    newUser.Id, newUser.Email, token
                )
            );
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] AuthRequest request)
        {
            // FINDS USER BY EMAIL
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == request.Email);

            // RETURNS 401 IF THE CREDENTIALS ARE INVALID
            if (user is null || !Utility.VerifyPassword(request.Password, user.PasswordHash)) return Unauthorized("Invalid credentials.");

            // GENERATES JWT TOKEN
            var token = _jwtService.GenerateToken(user);

            // RETURNS SUCCESS RESPONSE
            return Ok(new AuthResponse(
                "Login Successful.",
                user.Id, user.Email, token)
            );
        }
    }
}
