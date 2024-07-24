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
            .Must(model => model.Any() && model.Count() <= 2)
            .ForEach(x => x.SetValidator(new GuestValidator()));
    }
}

public class GuestValidator : AbstractValidator<Guest>
{
    public GuestValidator()
    {
        RuleFor(x => x.FirstName)
            .NotEmpty()
            .MaximumLength(255);

        RuleFor(x => x.LastName)
            .NotEmpty()
            .MaximumLength(255);
    }
}