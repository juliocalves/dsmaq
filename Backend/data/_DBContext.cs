using Microsoft.EntityFrameworkCore;

namespace Backend.models
{
    //a classe _dbcontext herda DbContext do entity framework
    public class _DBContext:DbContext
    {
        public _DBContext(DbContextOptions<_DBContext> options) : base(options){}
        protected override void  OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        //indica a propriedade de associaçao com o contexto

        // public DbSet<SuplyerGroup> suplyerGroup {get; set;} 
        // public DbSet<Suplyer> suplyer {get; set;} 

        public DbSet<User> Users {get; set;}
    }
}