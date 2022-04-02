using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<User>>> GetUsers()
        {
            try
            {
                var users = await _userService.GetUsers();
                return Ok(users);
            }
            catch
            {
                return BadRequest("Error get users");
            }
        }

        [HttpGet ("userName")]
        public async Task<ActionResult<IAsyncEnumerable<User>>> GetUsersByUserName([FromQuery] string userName)
        {
            try
            {
                var users = await _userService.GetUsersByUserName(userName);

                if (users.Count() == 0)
                    return NotFound($"User dont exiist { userName}");

                return Ok(users);
            }
            catch
            {
                return BadRequest("Error get users");
            }
        }

        [HttpGet("password")]
        public async Task<ActionResult<IAsyncEnumerable<User>>> GetPassword([FromQuery] string password)
        {
            try
            {
                var users = await _userService.GetPassword(password);

                if (users.Count() == 0)
                    return NotFound($"User dont exiist { password}");

                return Ok(users);
            }
            catch
            {
                return BadRequest("Error get users");
            }
        }

        [HttpGet("{id:int}", Name="GetUser")]
        public async Task<ActionResult<IAsyncEnumerable<User>>> GetUser(int id)
        {
            try
            {
                var user = await _userService.GetUser(id);

                if (user == null)
                    return NotFound($"User dont exiist {id}");

                return Ok(user);
            }
            catch
            {
                return BadRequest("Error get users");
            }
        }
         
        [HttpPost]
        public async Task<ActionResult> Create(User user)
        {
            try
            {
                await _userService.CreateUser(user);
                return CreatedAtRoute(nameof(GetUser), new { id = user.Id }, user);

            }
            catch
            {
                return BadRequest("Error get users");
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Update(int id, [FromBody] User user)
        {
            try
            {
                if (user.Id == id)
                {
                    await _userService.UpdateUser(user);
                    return Ok($"User update");
                }
                else
                {
                    return BadRequest("Error get users");
                }
            }
            catch
            {
                return BadRequest("Error get users");
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                var user = await _userService.GetUser(id);
                if (user !=null)
                {
                    await _userService.DeleteUser(user);
                    return Ok($"User deleted");
                }
                else
                {
                    return BadRequest("Error get users");
                }
            }
            catch
            {
                return BadRequest("Error get users");
            }
        }
    }
 }
