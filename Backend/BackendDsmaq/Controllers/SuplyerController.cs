using BackendDsmaq.Interfaces;
using BackendDsmaq.Models;
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
    public class SuplyerController : ControllerBase
    {
        private ISuplyer _suplyerService;

        public SuplyerController(ISuplyer suplyerService)
        {
            _suplyerService = suplyerService;
        }

        [HttpPost("CreateSuplyer")]
        public async Task<ActionResult> CreateSuplyer([FromBody] Suplyer suplyer)
        {
            try
            {
                await _suplyerService.CreateSuplyer(suplyer);
                return CreatedAtRoute(nameof(GetSuplyerById), new { id = suplyer.Id}, suplyer);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpGet("{id:int}", Name = "GetSuplyerById")]
        public async Task<ActionResult<Suplyer>> GetSuplyerById(int id)
        {
            try
            {
                var suplyer = await _suplyerService.GetSuplyer(id);

                if (suplyer == null)
                    return NotFound($"Não existe Fornecedor com id = {id}");
                return Ok(suplyer);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
        [HttpGet ("GetSuplyers")]
        public async Task<ActionResult<IAsyncEnumerable<Suplyer>>> GetSuplyers()
        {
            try
            {
                var suplyers = await _suplyerService.GetSuplyers();
                return Ok(suplyers);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("SuplyerName")]
        public async Task<ActionResult<IAsyncEnumerable<Suplyer>>> GetSuplyerByName([FromQuery] string fantasyName)
        {
            try
            {
                var suplyers = await _suplyerService.GetSuplyerByName(fantasyName);
                if (suplyers.Count()==0)
                    return NotFound($"Não há Fornecedor com esse nome.");
                return Ok(suplyers);
            }
            catch
            {
                return BadRequest();
            }
        }      

        [HttpPut("UpdateSuplyer")]
        public async Task<ActionResult> UpdateSuplyer(int id, [FromBody] Suplyer suplyer)
        {
            try
            {
                if (suplyer.Id == id)
                {
                    await _suplyerService.UpdateSuplyer(suplyer);
                    return Ok($"Fornecedor atualizado com sucesso");
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

        [HttpDelete("DeleteSuplyer")]
        public async Task<ActionResult> DeleteSuplyer(int id)
        {
            try
            {
                var suplyer = await _suplyerService.GetSuplyer(id);
                if(suplyer != null)
                {
                   await _suplyerService.DeleteSuplyer(suplyer);
                    return Ok("Fornecedor deletado");
                }
                else
                {
                    return NotFound("Fornecedor não encontrado");
                }
                
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }
    }
}
