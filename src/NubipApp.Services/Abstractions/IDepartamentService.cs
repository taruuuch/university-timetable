using System.Threading.Tasks;
using NubipApp.Models.Domain;
using NubipApp.Services.Responses.Base;

namespace NubipApp.Services.Abstractions
{
    public interface IDepartamentService
    {
        Task<ItemsResponse<Departament>> GetList();
    }
}