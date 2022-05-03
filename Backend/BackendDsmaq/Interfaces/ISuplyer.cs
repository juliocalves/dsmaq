using BackendDsmaq.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Interfaces
{
    public interface ISuplyer
    {
        Task<IEnumerable<Suplyer>> GetSuplyers();
        Task<Suplyer> GetSuplyer(int id);
        Task<IEnumerable<Suplyer>> GetSuplyerByName(string fantasyName);
        Task CreateSuplyer(Suplyer suplyer);
        Task UpdateSuplyer(Suplyer suplyer);
        Task DeleteSuplyer(Suplyer suplyer);
       
    }
}
