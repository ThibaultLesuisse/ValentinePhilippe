using System.Runtime.CompilerServices;
using Wedding.Api.Endpoints;
using Wedding.Api.Infrastructure;
using FluentValidation;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder
    .Services
    .AddDbContext<WeddingDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Database"), optionsBuilder =>
    {
        optionsBuilder.UseAzureSqlDefaults();
    }));

builder.Services.AddValidatorsFromAssembly(typeof(Program).Assembly);
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<Program>());

builder.Services.AddSwaggerGen();
builder.Services.AddCors(cortOptions =>
{
    cortOptions.AddDefaultPolicy(policy =>
    {
        policy
            .WithOrigins("http://localhost:4200", "valentine-philippe.be", "www.valentine-philippe.be", "https://valentine-philippe.be")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .SetIsOriginAllowedToAllowWildcardSubdomains()
            .Build();
    });
});

builder.Services.AddRateLimiter(options =>
{
    if (builder.Environment.IsDevelopment())
    {
        options.AddFixedWindowLimiter("fixed", limiterOptions =>
        {
            limiterOptions.PermitLimit = 40;
            limiterOptions.Window = TimeSpan.FromSeconds(1);
        });
    }
    else
    {
        options.AddFixedWindowLimiter("fixed", limiterOptions =>
        {
            limiterOptions.PermitLimit = 4;
            limiterOptions.Window = TimeSpan.FromHours(12);
        });
    }
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapRsvp();

app.UseHttpsRedirection();

app.UseCors();
app.UseRateLimiter();

app.Run();
