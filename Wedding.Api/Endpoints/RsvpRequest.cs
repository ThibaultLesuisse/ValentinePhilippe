namespace Wedding.Api.Endpoints;

public record RsvpRequest
{
    public string Email { get; set; }
    
    public IEnumerable<Guest> Guests { get; set; }
    
    public Address Address { get; set; }
}

public record Guest
{
    public string FirstName { get; set; }
    
    public string LastName { get; set; }
    
    public bool isVegetarian { get; set; }
    
    public string dietaryRestrictions { get; set; }
}

public record Address(
    string StreetAndHouseNumber,
    string City,
    string PostalCode,
    string Country);