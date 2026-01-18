using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace TaskManager.Base
{
    public class BaseController : ControllerBase
    {
        // EXTRACT USER ID FROM JWT TOKEN
        protected int UserId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
    }
}
