using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Services
{
    public interface IAuth
    {
        Task<bool> Auth(string email, string password);
        Task<bool> RegisterUser(string email, string password);
        Task Logout();
    }
}
