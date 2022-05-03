using BackendDsmaq.Data;
using BackendDsmaq.Models;
using BackendDsmaq.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Services
{
    public class AddressService : IAddress
    {

        private readonly DataBaseContext _dataBaseContext;

        public AddressService(DataBaseContext dataBaseContext)
        {
            _dataBaseContext = dataBaseContext;
        }

        public async Task<IEnumerable<Address>> GetAddresses()
        {
            return await _dataBaseContext.Addresses.ToListAsync();

        }

        public async Task<Address> GetAddress(int id)
        {
            var suplyerAddress = await _dataBaseContext.Addresses.FindAsync(id);
            return suplyerAddress;
        }

        public async Task<IEnumerable<Address>> GetFullAddress(string cep, string street, string city, string state)
        {
            IEnumerable<Address> suplyerAddress;
            if (!string.IsNullOrWhiteSpace(cep) || !string.IsNullOrWhiteSpace(street) || !string.IsNullOrWhiteSpace(state))
            {
                suplyerAddress = await _dataBaseContext.Addresses.Where(
                    item => item.Cep.Contains(cep)
                    || item.Street.Contains(street)
                    || item.State.Contains(state)).ToListAsync();
            }
            else
            {
                suplyerAddress = await GetAddresses();
            }
            return suplyerAddress;
        }

        public async Task CreateSuplyerAddress(Address suplyerAddress)
        {
            _dataBaseContext.Add(suplyerAddress);
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task UpdateSuplyerAddress(Address suplyerAddress)
        {
            _dataBaseContext.Entry(suplyerAddress).State = EntityState.Modified;
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task DeleteSuplyerAddress(Address suplyerAddress)
        {
            _dataBaseContext.Remove(suplyerAddress).State = EntityState.Deleted;
            await _dataBaseContext.SaveChangesAsync();
        }
    }
}
