using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackendDsmaq.Models
{
    public class Payment
    {
        public int Id { get; set; }
        [ForeignKey("ExpenseId")]
        public int ExpenseId { get; set; }
        public DateTime PayDate { get; set; }
        public double DiscountValue { get; set; }
        public double ExpenseValue { get; set; }
        public double InterestValue { get; set; }
        public double AmountPaid { get; set; }
    }
}
