using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Models
{
    public class Suplyer
    {
        public int Id { get; set; }
        [Required]
        public string CorporateName { get; set; }
        [Required]
        public string FantasyName {get;set; }
        [Required]
        public string Cnpj { get; set; }
        [Required]
        public string SocialRegistration { get; set; } 
        
        [Required]
        [ForeignKey("SuplyerGroupId")]
        public int SuplyerGoupId { get; set; }
        [Required]
        public DateTime CadastramentDate { get; set; }
        public bool IsActive { get; set; }
      
    }
}
