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
    public class SuplyerGroupService : ISuplyerGroup
    {
        private readonly DataBaseContext _dataBaseContext;

        public SuplyerGroupService(DataBaseContext dataBaseContext)
        {
            _dataBaseContext = dataBaseContext;
        }

        public async Task<IEnumerable<SuplyerGroup>> GetSuplyerGroups()
        {
            return await _dataBaseContext.SuplyerGroups.ToListAsync();
        }

        public async Task<SuplyerGroup> GetSuplyerGroup(int id)
        {
            var suplyerGroup = await _dataBaseContext.SuplyerGroups.FindAsync(id);
            return suplyerGroup;
        }

        public async Task<IEnumerable<SuplyerGroup>> GetSuplyerGroupsByName(string description)
        {
            IEnumerable<SuplyerGroup> suplyerGroups;
            if (!string.IsNullOrWhiteSpace(description))
            {
                suplyerGroups = await _dataBaseContext.SuplyerGroups.Where(
                    item => item.Description.Contains(description)).ToListAsync();
            }
            else
            {
                suplyerGroups = await GetSuplyerGroups();
            }
            return suplyerGroups;
        }

        public async Task CreateSuplyerGroup(SuplyerGroup suplyerGroup)
        {
            _dataBaseContext.Add(suplyerGroup);
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task UpdateSuplyerGroup(SuplyerGroup suplyerGroup)
        {
            _dataBaseContext.Entry(suplyerGroup).State = EntityState.Modified;
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task DeleteSuplyerGroup(SuplyerGroup suplyerGroup)
        {
            _dataBaseContext.Remove(suplyerGroup).State = EntityState.Deleted;
            await _dataBaseContext.SaveChangesAsync();
        }

    }
}
