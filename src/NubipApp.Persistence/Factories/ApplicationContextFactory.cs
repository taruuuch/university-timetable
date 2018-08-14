using NubipApp.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;
using NubipApp.Persistence.DataBase;

namespace NubipApp.Persistence.Factories
{
    public class DataContextFactory : IApplicationContextFactory
    {
        public DataContext CreateDbContext(string connectionString)
        {
            var optionsBuilder = new DbContextOptionsBuilder<DataContext>();
            optionsBuilder.UseNpgsql(connectionString);

            return new DataContext(optionsBuilder.Options);
        }
    }
}