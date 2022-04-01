using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase{

        private readonly DataBaseContext _dataBaseContext;

        public UserController(DataBaseContext dataBaseContext){
            _dataBaseContext = dataBaseContext;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers(){
            return await _dataBaseContext.Users.ToListAsync();
        }

        [HttpGet ("{id}")]
        public async Task<ActionResult<User>> GetUser(int id){
            var user = await  _dataBaseContext.Users.FindAsync(id);

            if (user == null){
                return NotFound();
            }

            return user;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user){
            if (id !=  user.Id){
                return BadRequest();
            }
            _dataBaseContext.Entry(user).State = EntityState.Modified;

            try {
                await _dataBaseContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException){
                if (!UserExists(id)){
                    return NotFound();
                } else {
                    throw;
                }
            }
            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user){
            _dataBaseContext.Users.Add(user);
            await _dataBaseContext.SaveChangesAsync();

            return CreatedAtAction("GetUser",new {id = user.Id}, user);
        }

        [HttpDelete ("{id}")]
        public async Task<IActionResult> DeleteUser(int id){
            var user = await _dataBaseContext.Users.FindAsync(id);
            if(user == null){
                return NotFound();
            }
            _dataBaseContext.Users.Remove(user);
            await _dataBaseContext.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id){
            return _dataBaseContext.Users.Any( e => e.Id == id );
        }
    }
}