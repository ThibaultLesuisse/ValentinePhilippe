using Microsoft.EntityFrameworkCore;
using Wedding.Api.Domain;
using Wedding.Api.Infrastructure.Configuration;

namespace Wedding.Api.Infrastructure;

public class WeddingDbContext(DbContextOptions<WeddingDbContext> options) : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new GuestConfiguration());
        modelBuilder.ApplyConfiguration(new RsvpConfiguration());
        base.OnModelCreating(modelBuilder);
    }

    public DbSet<Rsvp> Rsvps { get; init ; }
    public DbSet<Guest> Guests { get; init; }
}