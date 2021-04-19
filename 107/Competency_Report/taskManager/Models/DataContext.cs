using Microsoft.EntityFrameworkCore;
namespace taskManager.Models

{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> conInfo) : base(conInfo)
        {
            /* 
            Run migrations everytime something changes on the models 
            - dotnet ef migrations add <someName> 
            - dotnet ef database update 
            */
        }

        //which of your models should become tables inside the database
        public DbSet<Task> Tasks {get; set;}

        public DbSet<Contact> Messages {get; set;}

    }
}