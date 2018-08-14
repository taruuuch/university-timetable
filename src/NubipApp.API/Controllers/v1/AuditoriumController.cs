using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NubipApp.Persistence.DataBase;

namespace NubipApp.API.Controllers.v1
{
    [Route("api/v1/auditoriums")]
    public class AuditoriumController : Controller
    {
        private DataContext db;
        
        public AuditoriumController(DataContext db)
        {
            this.db = db;
        }
        
        [HttpGet("")]
        public JsonResult GetList()
        {
            var json = 
                db.Auditoriums
                    .Select(a => new
                    {
                        Id = a.AuditoriumId,
                        Title = a.Number,
                        Building = a.Building.Number
                    })
                    .ToList();
            return new JsonResult(json);
        }
    }
}