using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class AuthService : IAuth
    {

        private  readonly SignInManager<IdentityUser> _signInManager;
        private  readonly UserManager<IdentityUser> _userManager;

        public AuthService(SignInManager<IdentityUser> signInManager,
            UserManager<IdentityUser> userManager )
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        public async Task<bool> Authenticate(string email, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(email, password,
                false, lockoutOnFailure:false);

            return result.Succeeded;
        }

        public Task Authenticate(object email, object password)
        {
            throw new NotImplementedException();
        }

        public async Task Logout()
        {
            await _signInManager.SignOutAsync();
        }

        public async Task<bool> RegisterUser(string email, string password)
        {
            var appUser = new IdentityUser
            {
                UserName = email,
                Email = email,
            };
            var result = await _userManager.CreateAsync(appUser, password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(appUser, isPersistent: false);
            }
            return result.Succeeded;
        }
    }
}
