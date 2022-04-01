using Backend.models;
using Microsoft.EntityFrameworkCore;


var dsmaqAllowSpecificOrigins = "_dsmaqAllowSpecificOrigins";


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//chama o contexto de banco de dado e indica qual banco de dados é usado
builder.Services.AddDbContext<_DBContext>(dataBase => {
    dataBase.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConection"));
});

//enable cors
builder.Services.AddCors(options =>{
    options.AddPolicy(name:dsmaqAllowSpecificOrigins,
        builder => {
            builder.WithOrigins("http://localhost:4200")
        }
    )
})



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
