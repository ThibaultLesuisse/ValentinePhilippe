using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Wedding.Api.Domain;

namespace Wedding.Api.Infrastructure.Configuration;

public class GuestConfiguration: IEntityTypeConfiguration<Guest>
{
    public void Configure(EntityTypeBuilder<Guest> builder)
    {
        builder.HasKey(x => x.Id);

        builder
            .Property(x => x.FirstName)
            .IsRequired();

        builder
            .Property(x => x.DietaryRestrictions)
            .HasMaxLength(500)
            .IsUnicode()
            .IsRequired(false);
        
        builder
            .Property(x => x.LastName)
            .IsRequired();
        
        builder
            .HasOne(x => x.Rsvp)
            .WithMany(x => x.Guests)
            .IsRequired();
    }
}