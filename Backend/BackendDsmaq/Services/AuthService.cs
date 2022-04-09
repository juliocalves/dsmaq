using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Services
{
    public class AuthService : IAuth
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;

        public  AuthService(SignInManager<IdentityUser> signInManager, 
            UserManager<IdentityUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        public async Task<bool> Auth(string email, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(email, password, false, lockoutOnFailure: false);

            return result.Succeeded;
        }

        public async Task Logout()
        {
            await _signInManager.SignOutAsync();
        }

        public async Task<bool> RegisterUser(string email, string password)
        {
            var creatUser = new IdentityUser
            {
                UserName = email,
                Email = email,
            };

            var result = await _userManager.CreateAsync(creatUser, password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(creatUser, isPersistent: false);
            }

            return result.Succeeded;
        }
    }
}
