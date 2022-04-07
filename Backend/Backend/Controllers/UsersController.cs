using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

    public class UsersController : ControllerBase
    {
        
        private readonly UserService _userService;
        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
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
    }
 }
