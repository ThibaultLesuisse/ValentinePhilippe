namespace Wedding.Api.Domain;

public class Guest
{
    public int Id { get; set;  }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public bool IsVegetarian { get; set; }
    public string? DietaryRestrictions { get; set; }
    
    
    public virtual Rsvp Rsvp { get; set; }
}