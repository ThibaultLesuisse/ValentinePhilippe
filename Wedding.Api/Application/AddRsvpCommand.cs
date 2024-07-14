using MediatR;
using OneOf;
using Wedding.Api.Application.Errors;
using Wedding.Api.Domain;
using Wedding.Api.Endpoints;

namespace Wedding.Api.Application;

public record AddRsvpCommand(RsvpRequest RsvpRequest): IRequest<OneOf<Rsvp, EmailExists>>;