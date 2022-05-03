using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Models
{
    public class Address
    {
        public int Id { get; set; }
        [Required]
        public string Cep { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public string District { get; set; }
        [Required]
        public int StreetNumber { get; set; }
        public string Complement { get; set; }

        [Required]
        [ForeignKey ("SuplyerId")]
        public int SuplyerId { get; set; }
        
    }
}
