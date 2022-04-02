using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data
{
    public class DataBaseDsmaqContext : DbContext
    {
        public DataBaseDsmaqContext(DbContextOptions<DataBaseDsmaqContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<SuplyerGroup> SuplyerGroups { get; set; }
    }
}
