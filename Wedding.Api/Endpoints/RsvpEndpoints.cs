using System.Text;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Wedding.Api.Application;

namespace Wedding.Api.Endpoints;

public static class RsvpEndpoints
{
    public static RouteGroupBuilder MapRsvp(this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("rsvp");

        group.MapPost("/",
            async Task<Results<Ok, ProblemHttpResult>>([FromBody] RsvpRequest rsvpRequest, ISender sender, IValidator<RsvpRequest> validator) =>
            {
                var validationResult = await validator.ValidateAsync(rsvpRequest);

                if (!validationResult.IsValid)
                {
                    return TypedResults.Problem(new ProblemDetails
                    {
                        Detail = validationResult.Errors.Aggregate(
                            new StringBuilder(),
                            (current, next) =>
                            {
                                current.Append(next);
                                return current;
                            },
                            result => result.ToString()),
                        Title = "Validation Failed"
                    });
                }

                var result = await sender.Send(new AddRsvpCommand(rsvpRequest));

                return result.Match<Results<Ok, ProblemHttpResult>>(
                    valid => TypedResults.Ok(),
                    emailExists => TypedResults.Problem(new ProblemDetails()
                    {
                        Title = "Form was already submitted",
                        Detail = "Email is already registered"
                    }));
            })
            .RequireCors();

        return group;
    }
}