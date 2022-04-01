using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase{
        [HttpGet]
        public async Task<IActionResult> Get(){
            var users = new List<models.User> ();
        }
    }
}