using Microsoft.EntityFrameworkCore;

namespace NubipApp.Persistence.DataBase
{
    public static class DataInitializer
    {
        public static void Initialize(DataContext context)
        {
            context.Database.Migrate();
        }
    }
}