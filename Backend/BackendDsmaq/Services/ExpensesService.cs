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
    public class ExpensesService :IExpenses
    {
        private readonly DataBaseContext _dataBaseContext;

        public ExpensesService(DataBaseContext dataBaseContext)
        {
            _dataBaseContext = dataBaseContext;
        }

        public async Task<IEnumerable<Expenses>> GetExpenses()
        {
            return await _dataBaseContext.Expenses.ToListAsync();
        }

        public async Task<Expenses> GetExpense(int id)
        {
            var expenses = await _dataBaseContext.Expenses.FindAsync(id);
            return expenses;
        }

        public async Task<IEnumerable<Expenses>> GetExpenseByName(string document)
        {
            IEnumerable<Expenses> expenses;
            if (!string.IsNullOrWhiteSpace(document))
            {
                expenses = await _dataBaseContext.Expenses.Where(
                    item => item.Document.Contains(document)).ToListAsync();
            }
            else
            {
                expenses = await GetExpenses();
            }
            return expenses;
        }

        public async Task CreateExpense(Expenses expenses)
        {
            _dataBaseContext.Add(expenses);
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task UpdateExpense(Expenses expenses)
        {
            _dataBaseContext.Entry(expenses).State = EntityState.Modified;
            await _dataBaseContext.SaveChangesAsync();
        }

        public async Task DeleteExpense(Expenses expenses)
        {
            _dataBaseContext.Remove(expenses).State = EntityState.Deleted;
            await _dataBaseContext.SaveChangesAsync();
        }
    }
}
