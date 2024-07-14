namespace Wedding.Api.Endpoints;

public class RsvpRequest
{
    public string Email { get; set; }
    public IEnumerable<Guest> Guests { get; set; }
}

public class Guest
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    
    public bool isVegetarian { get; set; }
    
    public string dietaryRestrictions { get; set; }
}