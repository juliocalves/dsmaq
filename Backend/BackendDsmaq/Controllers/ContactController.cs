using BackendDsmaq.Interfaces;
using BackendDsmaq.Models;
using BackendDsmaq.Services;
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

    public class ContactController : ControllerBase
    {
        private ISuplyerContact _suplyerService;

        public ContactController(ISuplyerContact suplyerContactService)
        {
            _suplyerService = suplyerContactService;
        }


        [HttpPost("CreateSuplyerContact")]
        public async Task<ActionResult> CreateSuplyerContact([FromBody] Contact contact)
        {
            try
            {
                await _suplyerService.CreateSuplyerContact(contact);
                return CreatedAtRoute(nameof(GetSuplyerContactId), new { id = contact.Id}, contact );
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
       
        [HttpGet]
        [Route("{id:int}", Name ="GetSuplyerContactId")]
        public async Task<ActionResult<Contact>> GetSuplyerContactId(int id)
        {
            try
            {
                var suplyerContact = await _suplyerService.GetContact(id);

                if (suplyerContact == null)
                    return NotFound($"Não existe Contado Fornecedor com id = {id}");
                return Ok(suplyerContact);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpGet("SuplyerContact")]
        public async Task<ActionResult<IAsyncEnumerable<Contact>>> GetSuplyerContact()
        {
            try
            {
                var contactSuplyers = await _suplyerService.GetContacts();
                return Ok(contactSuplyers);
            }
            catch
            {
                return BadRequest();
            }
        }

        /*[HttpGet("SuplyerFullContact")]
        public async Task<ActionResult<IAsyncEnumerable<Contact>>> GetSuplyerFullContact([FromQuery] string email, string representative, string phoneNumber)
        {
            try
            {
                var suplyers = await _suplyerService.GetContacts(email, representative, phoneNumber);
                if (suplyers == null)
                    return NotFound($"Não há Fornecedor com esse nome.");
                return Ok(suplyers);
            }
            catch
            {
                return BadRequest();
            }
        }*/      

        [HttpPut("UpdateSuplyeContact")]
        public async Task<ActionResult> UpdateSuplyerContact(int id, [FromBody] Contact contact)
        {
            try
            {
                if (contact.Id == id)
                {
                    await _suplyerService.UpdateSuplyerContact(contact);
                    return Ok($"Contato atualizado com sucesso");
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

        [HttpDelete("DeleteSuplyerContact")]
        public async Task<ActionResult> DeleteSuplyerContact(int id)
        {
            try
            {
                var suplyerContact = await _suplyerService.GetContact(id);
                if (suplyerContact != null)
                {
                    await _suplyerService.DeleteSuplyerContact(suplyerContact);
                    return Ok("Contato deletado");
                }
                else
                {
                    return NotFound("Contato  não encontrado");
                }

            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }

    }    
}
