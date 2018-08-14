using NubipApp.Persistence.DataBase;

namespace NubipApp.Persistence.Interfaces
{
    public interface IApplicationContextFactory
    {
        DataContext CreateDbContext(string connectionString);
    }
}