using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public static UserLogin userLogin = new UserLogin();
        private IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration; 
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserLogin>> Register(User request)
        {
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            userLogin.UserName = request.UserName;
            userLogin.PasswordHash = passwordHash;
            userLogin.PasswordSalt = passwordSalt;

            return Ok(userLogin);

        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(User request)
        {
            if (userLogin.UserName != request.UserName)
            {
                return BadRequest("User dont exist");
            }
            if (!VerifyPassordHash(request.Password, userLogin.PasswordHash, userLogin.PasswordSalt))
            {
                return BadRequest("wrong password");
            }
            string token = CreateToken(userLogin);
            return Ok(token);
        }

        private string CreateToken(UserLogin userLogin)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, userLogin.UserName)
            };

            var Key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var credencial = new SigningCredentials(Key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credencial);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPassordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }
    }
}
