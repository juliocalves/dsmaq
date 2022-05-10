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
    public class FormPaymentService : IFormPayment
    {
        private readonly DataBaseContext _dataBaseContext;

        public FormPaymentService(DataBaseContext dataBaseContext)
        {
            _dataBaseContext = dataBaseContext;
        }

        public async Task<IEnumerable<FormPayment>> GetFormsPayment()
        {
            return await _dataBaseContext.FormPayments.ToListAsync();
        }

        public async Task<FormPayment> GetFormPayment(int id)
        {
            var formPayment = await _dataBaseContext.FormPayments.FindAsync(id);
            return formPayment;
        }

        public async Task<IEnumerable<FormPayment>> GetFormPaymentByName(string description)
        {
            IEnumerable<FormPayment> formPayments;
            if (!string.IsNullOrWhiteSpace(description))
            {
                formPayments = await _dataBaseContext.FormPayments.Where(
                    item => item.Description.Contains(description)).ToListAsync();
            }
            else
            {
               formPayments = await GetFormsPayment();
            }
            return formPayments;
        }

        public async Task CreateFormPayment(FormPayment formPayment)
        {
            _dataBaseContext.Add(formPayment);
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task UpdateFormPayment(FormPayment formPayment)
        {
            _dataBaseContext.Entry(formPayment).State = EntityState.Modified;
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task DeleteFormPayment(FormPayment formPayment)
        {
            _dataBaseContext.Remove(formPayment).State = EntityState.Deleted;
            await _dataBaseContext.SaveChangesAsync();
        }
    }
}
