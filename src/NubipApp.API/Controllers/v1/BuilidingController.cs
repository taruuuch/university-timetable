using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NubipApp.Persistence.DataBase;

namespace NubipApp.API.Controllers.v1
{
    [Route("api/v1/buildings")]
    public class BuilidingController : Controller
    {
        private DataContext db;

        public BuilidingController(DataContext db)
        {
            this.db = db;
        }

        [HttpGet("")]
        public JsonResult GetList()
        {
            var json =
                db.Departaments
                    .Select(d => new
                    {
                        Id = d.DepartamentId,
                        Title = d.Title
                    })
                    .ToList();
            return new JsonResult(json);
        }
        
        [HttpGet("{id}/auditoriums")]
        public JsonResult AuditoriumOfBuilding(int id)
        {
            var json = 
                db.Auditoriums
                    .Where(a => a.BuildingId == id)
                    .Select(a => new
                    {
                        Id = a.AuditoriumId,
                        Title = a.Number
                    })
                    .ToList();
            return new JsonResult(json);
        }
    }
}