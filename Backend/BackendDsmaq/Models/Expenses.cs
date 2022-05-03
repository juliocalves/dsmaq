using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Models
{
    public class Expenses
    {
        public int Id { get; set; }
        public DateTime IssueDate { get; set; }
        [ForeignKey("SuplyerId")]
        public int SuplyerId { get; set; }
        public string Document { get; set; }
        public DateTime Deadline { get; set; }
        public double InstallmentValue { get; set; }
        public int InstallmentNumber { get; set; }
        [ForeignKey("FormPaymentId")]
        public int FormPaymentId { get; set; }

    }
}
