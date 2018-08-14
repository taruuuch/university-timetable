using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NubipApp.Persistence.DataBase;

namespace NubipApp.API.Controllers.v1
{
    [Route("api/v1/departaments")]
    public class DepartamentController : Controller
    {
        private DataContext db;

        public DepartamentController(DataContext db)
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
        
        [HttpGet("{id}/teachers")]
        public JsonResult GetTeacherOfDepartament(int id)
        {
            var json =
                 db.Teachers
                    .Where(t => t.DepartamentId == id)
                    .Select(t => new
                    {
                        Id = t.TeacherId,
                        Name = t.Name,
                        MiddleName = t.Middlename, 
                        LastName = t.LastName
                    })
                    .ToList();
            return new JsonResult(json);
        }
    }
}