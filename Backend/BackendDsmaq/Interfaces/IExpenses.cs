using BackendDsmaq.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Interfaces
{
    public interface IExpenses
    {
        Task<IEnumerable<Expenses>> GetExpenses();
        Task<Expenses> GetExpense(int id);
        Task<IEnumerable<Expenses>> GetExpenseByName(string document);
        Task CreateExpense(Expenses expenses);
        Task UpdateExpense(Expenses expenses);
        Task DeleteExpense(Expenses expenses);
    }
}
