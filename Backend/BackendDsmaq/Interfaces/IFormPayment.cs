using BackendDsmaq.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Interfaces
{
    public interface IFormPayment
    {
        Task<IEnumerable<FormPayment>> GetFormsPayment();
        Task<FormPayment> GetFormPayment(int id);
        Task<IEnumerable<FormPayment>> GetFormPaymentByName(string description);
        Task CreateFormPayment(FormPayment formPayment);
        Task UpdateFormPayment(FormPayment formPayment);
        Task DeleteFormPayment(FormPayment formPayment);
    }
}
