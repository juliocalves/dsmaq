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
    public class FormPaymentController : ControllerBase
    {
        private readonly IFormPayment _FpaymentService;

        public FormPaymentController(IFormPayment formPaymentService)
        {
            _FpaymentService = formPaymentService;
        }


        [HttpGet("{id:int}", Name = "GetFormPaymentById")]

        public async Task<ActionResult<FormPayment>> GetFormPaymentById(int id)
        {
            try
            {
                var formPayment = await _FpaymentService.GetFormPayment(id);

                if (formPayment == null)
                    return NotFound($"Não existe Forma de Pagamento com id = {id}");
                return Ok(formPayment);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpPost("CreateFormPayment")]
        public async Task<ActionResult> CreateFormPayment([FromBody] FormPayment formPayment)
        {
            try
            {
                await _FpaymentService.CreateFormPayment(formPayment);
                return CreatedAtRoute(nameof(GetFormPaymentById), new { id = formPayment.Id }, formPayment);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("FormsPayment")]
        public async Task<ActionResult<IAsyncEnumerable<FormPayment>>> GetFormsPayment()
        {
            try
            {
                var formsPayment = await _FpaymentService.GetFormsPayment();
                return Ok(formsPayment);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("FormPaymentName")]
        public async Task<ActionResult<IAsyncEnumerable<FormPayment>>> GetFormPaymentByName([FromQuery] string description)
        {
            try
            {
                var formPayment = await _FpaymentService.GetFormPaymentByName(description);
                if (formPayment.Count() == 0)
                    return NotFound($"Não há Forma de Pagamento com essa descrição.");
                return Ok(formPayment);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("UpdateFormPayment")]
        public async Task<ActionResult> UpdateFormPayment(int id, [FromBody] FormPayment formPayment)
        {
            try
            {
                if (formPayment.Id == id)
                {
                    await _FpaymentService.UpdateFormPayment(formPayment);
                    return Ok($"Forma de Pagamento atualizada com sucesso");
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

        [HttpDelete("DeleteFormPayment")]
        public async Task<ActionResult> DeleteFormPayment(int id)
        {
            try
            {
                var formPayment = await _FpaymentService.GetFormPayment(id);
                if (formPayment != null)
                {
                    await _FpaymentService.DeleteFormPayment(formPayment);
                    return Ok("Forma de Pagemento deletado");
                }
                else
                {
                    return NotFound("Forma de Pagamento não encontrado");
                }

            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
    }
}
