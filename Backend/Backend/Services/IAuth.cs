using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    public interface IAuth
    {
        Task<bool> Authenticate(string email, string password);
        Task<bool> RegisterUser(string email, string password);

        Task Logout();
        Task Authenticate(object email, object password);
    }
}
