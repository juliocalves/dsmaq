using BackendDsmaq.Services;
using BackendDsmaq.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BackendDsmaq.Interfaces;

namespace BackendDsmaq.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IAuth _auth;

        public UserController(IConfiguration configuration, IAuth auth)
        {
            _configuration = configuration ?? 
                throw new ArgumentNullException(nameof(configuration));
            _auth = auth ?? 
                throw new ArgumentNullException(nameof(auth));
        }

        [HttpPost("CreatUser")]
        public async Task<ActionResult<UserToken>> CreateUser([FromBody] Register model)
        {
            if (model.Password != model.ConfirmPassword)
            {
                ModelState.AddModelError("CofirmPassword", "Verifique a senha");
                return BadRequest(ModelState);
            }
            var result = await _auth.RegisterUser(model.Email, model.Password);

            if (result)
            {
                return Ok($"User {model.Email} created");
            }
            else
            {
                ModelState.AddModelError("CreateUser", "Invalid register...");
                return BadRequest(ModelState);
            }
        }

        [HttpPost("LoginUser")]
        public async Task<ActionResult<UserToken>> Login([FromBody] Login userInfo)
        {
            var result = await _auth.Auth(userInfo.Email, userInfo.Password);
            if (result)
            {
                return GenerateToken(userInfo);
            }
            else
            {
                ModelState.AddModelError("LoginUser", "Login invalid...");
                return BadRequest(ModelState);
            }
        }

        private ActionResult<UserToken> GenerateToken(Login userInfo)
        {
            var claims = new[]
            {
                new Claim("userName", userInfo.Email),
                new Claim("myToken", "token client"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:key"]));

            var credencials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expiration = DateTime.UtcNow.AddMinutes(180);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: _configuration["Jwt: Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: expiration,
                signingCredentials: credencials);

            return new UserToken()
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = expiration,
            };
        }
    }
}
