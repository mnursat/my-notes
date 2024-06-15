using API.Contracts;
using API.DataAccess;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class NotesController : ControllerBase
{
    private readonly NotesDbContext dbContext;

    public NotesController(NotesDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateNoteRequest request, CancellationToken ct)
    {
        var note = new Note(request.Title, request.Description);

        await dbContext.Notes.AddAsync(note, ct);
        await dbContext.SaveChangesAsync(ct);

        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] GetNotesRequest request, CancellationToken ct)
    {
        var notesQuery = dbContext.Notes
            .Where(n => string.IsNullOrWhiteSpace(request.Search) ||
                        n.Title.ToLower().Contains(request.Search.ToLower()));

        Expression<Func<Note, object>> selectorKey = GetSelectorKey(request.SortItem?.ToLower());

        if (request.SortOrder == "desc")
        {
            notesQuery = notesQuery.OrderByDescending(selectorKey);
        }
        else
        {
            notesQuery = notesQuery.OrderBy(selectorKey);
        }

        var noteDtos = await notesQuery.Select(n => new NoteDto(n.Id, n.Title, n.Description, n.CreatedAt)).ToListAsync(ct);

        return Ok(new GetNotesResponse(noteDtos));
    }

    [HttpDelete]
    public async Task<IActionResult> Delete(Guid id)
    {
        var note = await dbContext.Notes.FirstOrDefaultAsync(n => n.Id == id);

        if (note is null)
        {
            return NotFound($"Note.NotFound with ID = {id}");
        }

        dbContext.Notes.Remove(note);
        await dbContext.SaveChangesAsync();
        return NoContent();
    }

    private Expression<Func<Note, object>> GetSelectorKey(string? sortItem)
    {
        return sortItem switch
        {
            "date" => note => note.CreatedAt,
            "title" => note => note.Title,
            _ => note => note.Id,
        };
    }
}
