using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    public interface IUserService
    {
        //controta para o servico a classe task representa uma operação async
        Task<IEnumerable<User>> GetUsers(); // contrato para imprementação de classe
        Task<User> GetUser(int id);
        Task<IEnumerable<User>> GetUsersByUserName(string userName);
        Task<IEnumerable<User>> GetPassword(string password);
        Task CreateUser(User user);
        Task UpdateUser(User user);
        Task DeleteUser(User user);
    }
}
