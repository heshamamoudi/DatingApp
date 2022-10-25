namespace API.Entities
{
    public class AppUser
    {
        
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PaswwordHash { get; set; }
        public byte[] PaswwordSalt { get; set; }
    }
}