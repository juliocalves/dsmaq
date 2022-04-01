using Microsoft.EntityFrameworkCore;

namespace Backend.models
{
    //a classe _dbcontext herda DbContext do entity framework
    public class DataBaseContext: DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options){}
        // protected override void  OnModelCreating(ModelBuilder builder)
        // {
        //     base.OnModelCreating(builder);
        // }
        public DbSet<User> Users {get; set;}

        //indica a propriedade de associaçao com o contexto

        // public DbSet<SuplyerGroup> suplyerGroup {get; set;} 
        // public DbSet<Suplyer> suplyer {get; set;} 

    }
}