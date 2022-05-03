using BackendDsmaq.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Interfaces
{
   public interface ISuplyerContact
    {
        Task<IEnumerable<Contact>> GetContacts();
        Task<Contact> GetContact(int id);
        Task<IEnumerable<Contact>> GetFullContacts(string email, string representative, string phoneNumber);
        Task CreateSuplyerContact(Contact suplyerContact);
        Task UpdateSuplyerContact(Contact suplyerContact);
        Task DeleteSuplyerContact(Contact suplyerContact);
    }
}
