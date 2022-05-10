using BackendDsmaq.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Interfaces
{
     public interface IPayment
    {
        Task<IEnumerable<Payment>> GetPayments();
        Task<Payment> GetPayment(int id);
        Task CreatePayment(Payment payment);
        Task UpdatePayment(Payment payment);
        Task DeletePayment(Payment payment);
    }
}
