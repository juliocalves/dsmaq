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

    public class AddressController : ControllerBase
    {

        private IAddress _suplyerService;

        public AddressController(IAddress suplyerService)
        {
            _suplyerService = suplyerService;
        }

        [HttpPost("CreateSuplyerAddress")]
        public async Task<ActionResult> CreateSuplyerAddress([FromBody] Address address)
        {
            try
            {
                await _suplyerService.CreateSuplyerAddress(address);
                return CreatedAtRoute(nameof(GetSuplyerAddressId), new { id = address.Id}, address );
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpGet ("{id:int}" , Name ="GetSuplyerAddressId")]
        public async Task<ActionResult<Address>> GetSuplyerAddressId(int id)
        {
            try
            {
                var suplyerAddress = await _suplyerService.GetAddress(id);

                if (suplyerAddress == null)
                    return NotFound($"Não existe Endereco  com id = {id}");
                return Ok(suplyerAddress);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpGet("SuplyerAddresses")]
        public async Task<ActionResult<IAsyncEnumerable<Address>>> GetSuplyerAddresses()
        {
            try
            {
                var suplyerAdrress = await _suplyerService.GetAddresses();
                return Ok(suplyerAdrress);
            }
            catch
            {
                return BadRequest();
            }
        }
       
        [HttpPut("UpdateSuplyerAddress")]
        public async Task<ActionResult> UpdateSuplyerAddress(int id, [FromBody] Address address)
        {
            try
            {
                if (address.Id == id)
                {
                    await _suplyerService.UpdateSuplyerAddress(address);
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

        [HttpDelete("DeleteSuplyerAddress")]
        public async Task<ActionResult> DeleteSuplyerAddress(int id)
        {
            try
            {
                var suplyerAddress = await _suplyerService.GetAddress(id);
                if (suplyerAddress != null)
                {
                    await _suplyerService.DeleteSuplyerAddress(suplyerAddress);
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
