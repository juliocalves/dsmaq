using BackendDsmaq.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Interfaces
{
    public interface IAddress
    {

        Task<IEnumerable<Address>> GetAddresses();
        Task<Address> GetAddress(int id);
        Task<IEnumerable<Address>> GetFullAddress(string cep, string street, string city, string state);
        Task CreateSuplyerAddress(Address suplyerAddress);
        Task UpdateSuplyerAddress(Address suplyerAddress);
        Task DeleteSuplyerAddress(Address suplyerAddress);
    }
}
