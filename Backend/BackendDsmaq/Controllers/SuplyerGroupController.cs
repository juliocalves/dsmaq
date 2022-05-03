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
    public class SuplyerGroupController : ControllerBase
    {
        private readonly ISuplyerGroup _suplyerService;

        public SuplyerGroupController(ISuplyerGroup suplyerGroupService)
        {
            _suplyerService = suplyerGroupService;
        }


        [HttpGet("{id:int}", Name = "GetSuplyerGroupById")]

        public async Task<ActionResult<SuplyerGroup>> GetSuplyerGroupById(int id)
        {
            try
            {
                var suplyerGroup = await _suplyerService.GetSuplyerGroup(id);

                if (suplyerGroup == null)
                    return NotFound($"Não existe Grupo Fornecedor com id = {id}");
                return Ok(suplyerGroup);
            }
            catch
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpPost("CreateSuplyerGroup")]
        public async Task<ActionResult> CreateSuplyerGroup([FromBody]SuplyerGroup suplyerGroup)
        {
            try
            {
                await _suplyerService.CreateSuplyerGroup(suplyerGroup);
                return CreatedAtRoute(nameof(GetSuplyerGroupById), new { id = suplyerGroup.Id }, suplyerGroup);
            }
            catch
            {
                return BadRequest();
            }
        }
        
        [HttpGet("SuplyersGroups")]
        public async Task<ActionResult<IAsyncEnumerable<SuplyerGroup>>> GetSuplyerGroups()
        {
            try
            {
                var groupSuplyers = await _suplyerService.GetSuplyerGroups();
                return Ok(groupSuplyers);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("SuplyerGroupName")]
        public async Task<ActionResult<IAsyncEnumerable<SuplyerGroup>>> GetSuplyerGroupByName([FromQuery] string description)
        {
            try
            {
                var suplyers = await _suplyerService.GetSuplyerGroupsByName(description);
                if (suplyers.Count() == 0)
                    return NotFound($"Não há Fornecedor com esse nome.");
                return Ok(suplyers);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("UpdateSuplyerGroup")]
        public async Task<ActionResult> UpdateSuplyerGroup(int id, [FromBody] SuplyerGroup suplyerGroup)
        {
            try
            {
                if (suplyerGroup.Id == id)
                {
                    await _suplyerService.UpdateSuplyerGroup(suplyerGroup);
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

        [HttpDelete("DeleteSuplyerGroup")]
        public async Task<ActionResult> DeleteSuplyerGroup(int id)
        {
            try
            {
                var suplyerGroup = await _suplyerService.GetSuplyerGroup(id);
                if (suplyerGroup != null)
                {
                    await _suplyerService.DeleteSuplyerGroup(suplyerGroup);
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
