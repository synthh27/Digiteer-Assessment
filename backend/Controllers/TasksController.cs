using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

using TaskManager.Models;
using TaskManager.Data;
using TaskManager.DTOs;
using TaskManager.Base;
namespace TaskManager.API
{
    [Authorize]
    [Route("api/tasks")]
    [ApiController]

    public class TasksController : BaseController
    {
        private readonly ApplicationDbContext _context;

        public TasksController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            // FETCHES ALL USER'S TASKS
            var tasks = await _context.Tasks
                .Where(t => t.UserId == UserId)
                .Select(t => new TaskDTO(
                    t.Id,
                    t.Title,
                    t.IsDone
                ))
                .ToListAsync();

            // RETURNS 404 IF NO TASKS FOUND
            if (tasks.Count == 0) return NotFound("No tasks found");

            // RETURNS 200 WITH TASKS LIST
            return Ok(new GetTasksResponse(
                "Tasks fetched successfully",
                tasks));
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] TaskItem task)
        {
            
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = task.Id }, task);
        }

        [HttpPut("{id}")] 
        public async Task<IActionResult> Update(int id, [FromBody] TaskItem updated)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null) return NotFound();

            task.Title = updated.Title;
            task.IsDone = updated.IsDone;
            await _context.SaveChangesAsync();

            return Ok(task);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null) return NotFound();

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
