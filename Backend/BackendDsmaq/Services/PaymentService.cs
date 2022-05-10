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
    public class PaymentService : IPayment
    {
        private readonly DataBaseContext _dataBaseContext;

        public PaymentService(DataBaseContext dataBaseContext)
        {
            _dataBaseContext = dataBaseContext;
        }

        public async Task<IEnumerable<Payment>> GetPayments()
        {
            return await _dataBaseContext.Payments.ToListAsync();
        }

        public async Task<Payment> GetPayment(int id)
        {
            var payment = await _dataBaseContext.Payments.FindAsync(id);
            return payment;
        }

        public async Task CreatePayment(Payment payment)
        {
            _dataBaseContext.Add(payment);
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task UpdatePayment(Payment payment)
        {
            _dataBaseContext.Entry(payment).State = EntityState.Modified;
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task DeletePayment(Payment payment)
        {
            _dataBaseContext.Remove(payment).State = EntityState.Deleted;
            await _dataBaseContext.SaveChangesAsync();
        }
    }
}
