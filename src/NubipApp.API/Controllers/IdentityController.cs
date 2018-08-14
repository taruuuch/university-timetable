using Microsoft.AspNetCore.Mvc;
using NubipApp.Persistence.DataBase;

namespace NubipApp.API.Controllers
{
    public class IdentityController : Controller
    {
        private DataContext db;

        public IdentityController(DataContext db)
        {
            this.db = db;
        }

        [HttpPost]
        public IActionResult Identification()
        {
            return null;
        }
    }
}