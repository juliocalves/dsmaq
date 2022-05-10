using BackendDsmaq.Interfaces;
using BackendDsmaq.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ExpensesController : ControllerBase
    {
        private IExpenses _expensesService;

        public ExpensesController(IExpenses expensesService)
        {
            _expensesService = expensesService;
        }

        [HttpPost("CreateExpense")]
        public async Task<ActionResult> CreateExpense([FromBody] Expenses expenses)
        {
            try
            {
                await _expensesService.CreateExpense(expenses);
                return CreatedAtRoute(nameof(GetExpenseById), new { id = expenses.Id }, expenses);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpGet("{id:int}", Name = "GetExpenseById")]
        public async Task<ActionResult<Expenses>> GetExpenseById(int id)
        {
            try
            {
                var expenses = await _expensesService.GetExpense(id);

                if (expenses == null)
                    return NotFound($"Não existe Conta com id = {id}");
                return Ok(expenses);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpGet("GetExpenses")]
        public async Task<ActionResult<IAsyncEnumerable<Expenses>>> GetExpenses()
        {
            try
            {
                var expenses = await _expensesService.GetExpenses();
                return Ok(expenses);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("ExpenseName")]
        public async Task<ActionResult<IAsyncEnumerable<Expenses>>> GetExpenseByName([FromQuery] string document)
        {
            try
            {
                var expenses = await _expensesService.GetExpenseByName(document);
                if (expenses.Count() == 0)
                    return NotFound($"Não há Conta com essa descrição.");
                return Ok(expenses);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("UpdateExpense")]
        public async Task<ActionResult> UpdateExpense(int id, [FromBody] Expenses expenses)
        {
            try
            {
                if (expenses.Id == id)
                {
                    await _expensesService.UpdateExpense(expenses);
                    return Ok($"Conta atualizada com sucesso");
                }
                else
                {
                    return BadRequest("Dados inconsistentes");
                }
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpDelete("DeleteExpense")]
        public async Task<ActionResult> DeleteExpense(int id)
        {
            try
            {
                var expenses = await _expensesService.GetExpense(id);
                if (expenses != null)
                {
                    await _expensesService.DeleteExpense(expenses);
                    return Ok("Conta deletada");
                }
                else
                {
                    return NotFound("Conta não encontrada");
                }

            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
    }
}
