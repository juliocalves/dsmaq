using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class DataBaseDsmaqContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<User> User { get; set; }
        public DbSet<SuplyerGroup> SuplyerGroups { get; set; }

        public DataBaseDsmaqContext(DbContextOptions<DataBaseDsmaqContext> options) : base(options)
        {

        }
    }
}
