using NubipApp.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace NubipApp.Persistence.Repositories
{
    public abstract class BaseRepository
    {
        protected string ConnectionString { get; }
        protected IApplicationContextFactory ContextFactory { get; }
        
        public BaseRepository(string connectionString, IApplicationContextFactory contextFactory)
        {
            ConnectionString = connectionString;
            ContextFactory = contextFactory;
        }
    }
}