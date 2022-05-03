using BackendDsmaq.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BackendDsmaq.Data
{
    public class DataBaseContext : IdentityDbContext<IdentityUser>
    {

        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options)
        {

        }
       
        public virtual DbSet<Suplyer> Suplyers { get; set; }
        public virtual DbSet<SuplyerGroup> SuplyerGroups { get; set; }
        public virtual DbSet<Contact> Contacts { get; set; }
        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Expenses> Expenses { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<FormPayment> FormPayments { get; set; }
     
    }
}