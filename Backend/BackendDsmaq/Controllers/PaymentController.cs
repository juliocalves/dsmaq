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
    public class PaymentController : ControllerBase
    {
        private IPayment _paymentService;

        public PaymentController(IPayment paymentService)
        {
            _paymentService = paymentService;
        }

        [HttpPost("CreatePayment")]
        public async Task<ActionResult> CreatePayment([FromBody] Payment payment)
        {
            try
            {
                await _paymentService.CreatePayment(payment);
                return CreatedAtRoute(nameof(GetPaymentById), new { id = payment.Id }, payment);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpGet("{id:int}", Name = "GetPaymentById")]
        public async Task<ActionResult<Payment>> GetPaymentById(int id)
        {
            try
            {
                var payment = await _paymentService.GetPayment(id);

                if (payment == null)
                    return NotFound($"Não existe Pagamento com id = {id}");
                return Ok(payment);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpGet("GetPayments")]
        public async Task<ActionResult<IAsyncEnumerable<Payment>>> GetPayments()
        {
            try
            {
                var payment = await _paymentService.GetPayments();
                return Ok(payment);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("UpdatePayment")]
        public async Task<ActionResult> UpdatePayment(int id, [FromBody] Payment payment)
        {
            try
            {
                if (payment.Id == id)
                {
                    await _paymentService.UpdatePayment(payment);
                    return Ok($"Pagamento atualizada com sucesso");
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

        [HttpDelete("DeletePayment")]
        public async Task<ActionResult> DeletePayment(int id)
        {
            try
            {
                var payment = await _paymentService.GetPayment(id);
                if (payment != null)
                {
                    await _paymentService.DeletePayment(payment);
                    return Ok("Pagamento deletado");
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
