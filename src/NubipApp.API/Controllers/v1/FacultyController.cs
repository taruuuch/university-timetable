using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NubipApp.Persistence.DataBase;

namespace NubipApp.API.Controllers.v1
{
    [Route("api/v1/faculties")]
    public class FacultyController : Controller
    {
        private DataContext db;

        public FacultyController(DataContext db)
        {
            this.db = db;
        }
        
        [HttpGet("")]
        public JsonResult GetList()
        {
            var json = 
                db.Facultys
                    .Select(f => new
                    {
                        Id = f.FacultyId,
                        Title = f.Title
                    })
                    .ToList();
            return new JsonResult(json);
        }
    }
}