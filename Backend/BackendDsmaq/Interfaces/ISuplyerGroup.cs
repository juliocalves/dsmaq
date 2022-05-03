using BackendDsmaq.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Interfaces
{
    public interface ISuplyerGroup
    {
        Task<IEnumerable<SuplyerGroup>> GetSuplyerGroups();
        Task<SuplyerGroup> GetSuplyerGroup(int id);
        Task<IEnumerable<SuplyerGroup>> GetSuplyerGroupsByName(string description);
        Task CreateSuplyerGroup(SuplyerGroup suplyerGroup);
        Task UpdateSuplyerGroup(SuplyerGroup suplyerGroup);
        Task DeleteSuplyerGroup(SuplyerGroup suplyerGroup);
    }
}
