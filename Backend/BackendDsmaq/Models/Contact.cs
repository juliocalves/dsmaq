using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Models
{
    public class Contact
    {
        public int Id { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
               
        [Required]
        [ForeignKey("SuplyerId")]
        public int SuplyerId { get; set; }
        [EmailAddress]
        [Required]
        public string Email { get; set; }
       
        [Required]
        public string RepresentativeName { get; set; }
        public string Observe { get; set; }

    }
}
