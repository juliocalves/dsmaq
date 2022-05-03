using BackendDsmaq.Data;
using BackendDsmaq.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackendDsmaq.Interfaces;

namespace BackendDsmaq.Services
{
    public class SuplyerService : ISuplyer 
    {
        private readonly DataBaseContext _dataBaseContext;

        public SuplyerService(DataBaseContext dataBaseContext)
        {
            _dataBaseContext = dataBaseContext;
        }

        public async Task<IEnumerable<Suplyer>> GetSuplyers()
        {
            return await _dataBaseContext.Suplyers.ToListAsync();
        }

        public async Task<Suplyer> GetSuplyer(int id)
        {
            var suplyer = await _dataBaseContext.Suplyers.FindAsync(id);
            return suplyer;
        }

        public async Task<IEnumerable<Suplyer>> GetSuplyerByName(string fantasyName)
        {
            IEnumerable<Suplyer> suplyers;
            if (!string.IsNullOrWhiteSpace(fantasyName))
            {
                suplyers = await _dataBaseContext.Suplyers.Where(
                    item => item.FantasyName.Contains(fantasyName)).ToListAsync();
            }
            else {
                suplyers = await GetSuplyers();
            }
            return suplyers;
        }

        public async Task CreateSuplyer(Suplyer suplyer)
        {
            _dataBaseContext.Add(suplyer);
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task UpdateSuplyer(Suplyer suplyer)
        {
            _dataBaseContext.Entry(suplyer).State = EntityState.Modified;
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task DeleteSuplyer(Suplyer suplyer)
        {
            _dataBaseContext.Remove(suplyer).State =EntityState.Deleted;
            await _dataBaseContext.SaveChangesAsync();
        } 

    }
}
