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
    public class SuplyerContactService : ISuplyerContact
    {

        private readonly DataBaseContext _dataBaseContext;

        public SuplyerContactService(DataBaseContext dataBaseContext)
        {
            _dataBaseContext = dataBaseContext;
        }

        public async Task<IEnumerable<Contact>> GetContacts()
        {
            return await _dataBaseContext.Contacts.ToListAsync();

        }

        public async Task<Contact> GetContact(int id)
        {
            var suplyerContact = await _dataBaseContext.Contacts.FindAsync(id);
            return suplyerContact;
        }

        public async Task<IEnumerable<Contact>> GetFullContacts(string email, string representative, string phoneNumber)
        {
            IEnumerable<Contact> suplyerContacts;
            if (!string.IsNullOrWhiteSpace(email) || !string.IsNullOrWhiteSpace(representative) || !string.IsNullOrWhiteSpace(phoneNumber))
            {
                suplyerContacts = await _dataBaseContext.Contacts.Where(
                    item => item.Email.Contains(email)
                    || item.RepresentativeName.Contains(representative)
                    || item.PhoneNumber.Contains(phoneNumber)).ToListAsync();
            }
            else
            {
                suplyerContacts = await GetContacts();
            }
            return suplyerContacts;
        }

        public async Task CreateSuplyerContact(Contact suplyerContact)
        {
            _dataBaseContext.Add(suplyerContact);
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task UpdateSuplyerContact(Contact suplyerContact)
        {
            _dataBaseContext.Entry(suplyerContact).State = EntityState.Modified;
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task DeleteSuplyerContact(Contact suplyerContact)
        {
            _dataBaseContext.Remove(suplyerContact).State = EntityState.Deleted;
            await _dataBaseContext.SaveChangesAsync();
        }
    }
}
