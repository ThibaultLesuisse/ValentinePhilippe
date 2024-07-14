using FluentValidation;

namespace Wedding.Api.Endpoints;

public class RsvpValidator : AbstractValidator<RsvpRequest>
{
    public RsvpValidator()
    {
        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress();

        RuleFor(x => x.Guests)
            .NotEmpty()
            .Must(model => model.Any() && model.Count() <= 2);
    }
}