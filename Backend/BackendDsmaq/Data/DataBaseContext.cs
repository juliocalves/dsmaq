using BackendDsmaq.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BackendDsmaq.Data
{
    public class DataBaseContext : IdentityDbContext<IdentityUser>
    {
       
        public DbSet<SuplyerGroup> SuplyerGroups { get; set; }
        public DbSet<SuplyerGroup> Suplyer { get; set; }

        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options)
        {

        }
    }
}