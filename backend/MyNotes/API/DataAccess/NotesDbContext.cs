using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.DataAccess;

public class NotesDbContext : DbContext
{
    private readonly IConfiguration configuration;

    public NotesDbContext(IConfiguration configuration)
    {
        this.configuration = configuration;
    }

    public DbSet<Note> Notes => Set<Note>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(configuration.GetConnectionString("Local"));
    }
}
