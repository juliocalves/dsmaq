using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Models
{
    public class Login
    {
        [Required(ErrorMessage = "Invalid user")]
        [EmailAddress(ErrorMessage = "Format invalid")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password")]
        [StringLength(20, ErrorMessage = "Type your password.", MinimumLength = 10)]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
