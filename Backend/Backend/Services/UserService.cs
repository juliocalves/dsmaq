﻿using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class UserService : IUserService
    {
        private readonly DataBaseDsmaqContext _dataBaseDsmaqContext;

        public UserService(DataBaseDsmaqContext dataBaseDsmaqContext)
        {
            _dataBaseDsmaqContext = dataBaseDsmaqContext;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            //implementar tratamento de erros e exeções
            return (IEnumerable<User>)await _dataBaseDsmaqContext.Users.ToListAsync();

        }

        public async Task<IEnumerable<User>> GetUsersByUserName(string userName)
        {
            IEnumerable<User> users;
            if (!string.IsNullOrWhiteSpace(userName))
            {
                users = (IEnumerable<User>)await _dataBaseDsmaqContext.Users.Where(item => item.UserName.Contains(userName)).ToListAsync();
            }
            else
            {
                users = await GetUsers();
            }
            return users;

        }

        public async Task<IEnumerable<User>> GetPassword(string password)
        {
            IEnumerable<User> userPassword;
            if (!string.IsNullOrWhiteSpace(password))
            {
                userPassword = (IEnumerable<User>)await _dataBaseDsmaqContext.Users.Where(item => item.PasswordHash.Contains(password)).ToListAsync();
            }
            else
            {
                userPassword = await GetUsers();
            }
            return userPassword;
        }
       
        public async Task UpdateUser(User user)
        {
            _dataBaseDsmaqContext.Entry(user).State = EntityState.Modified;
            await _dataBaseDsmaqContext.SaveChangesAsync();
        }

        public async Task DeleteUser(User user)
        {
            _dataBaseDsmaqContext.Remove(user).State = EntityState.Deleted;
            await _dataBaseDsmaqContext.SaveChangesAsync();
        }
    }
}
