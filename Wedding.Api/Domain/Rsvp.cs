namespace Wedding.Api.Domain;

public class Rsvp
{
    public int Id { get; set; }
    public string Email { get; set; }
    public ICollection<Guest> Guests { get; set; }
}