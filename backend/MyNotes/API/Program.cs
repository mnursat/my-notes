using API.DataAccess;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddControllers();
    builder.Services.AddSwaggerGen();
    builder.Services.AddScoped<NotesDbContext>();
    builder.Services.AddCors(o =>
    {
        o.AddDefaultPolicy(p =>
        {
            p.WithOrigins("http://localhost:5173");
            p.AllowAnyHeader();
            p.AllowAnyMethod();
        });
    });
}

var app = builder.Build();
{
    using var scope = app.Services.CreateScope();
    await using var dbContext = scope.ServiceProvider.GetRequiredService<NotesDbContext>();
    await dbContext.Database.EnsureCreatedAsync();

    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();
    app.MapControllers();
    app.UseCors();
}

app.Run();
