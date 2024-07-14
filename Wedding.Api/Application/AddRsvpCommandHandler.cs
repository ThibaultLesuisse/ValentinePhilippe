using MediatR;
using Microsoft.EntityFrameworkCore;
using OneOf;
using Wedding.Api.Application.Errors;
using Wedding.Api.Domain;
using Wedding.Api.Infrastructure;

namespace Wedding.Api.Application;

public class AddRsvpCommandHandler(WeddingDbContext weddingDbContext)
    : IRequestHandler<AddRsvpCommand, OneOf<Rsvp, EmailExists>>
{
    public async Task<OneOf<Rsvp, EmailExists>> Handle(AddRsvpCommand request, CancellationToken cancellationToken)
    {
        var emailExists = await weddingDbContext.Rsvps.AnyAsync(x => x.Email == request.RsvpRequest.Email, cancellationToken);

        if (emailExists)
        {
            return new EmailExists();
        }

        var rsvp = new Rsvp
        {
            Email = request.RsvpRequest.Email,
            Guests = request.RsvpRequest.Guests.Select(guest => new Guest()
            {
                FirstName = guest.FirstName,
                LastName = guest.LastName,
                IsVegetarian = guest.isVegetarian,
                DietaryRestrictions = guest.dietaryRestrictions
            }).ToList()
        };

        weddingDbContext.Rsvps.Add(rsvp);

        await weddingDbContext.SaveChangesAsync(cancellationToken);

        return rsvp;
    }
}