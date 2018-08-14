using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NubipApp.Persistence.DataBase;

namespace NubipApp.API.Controllers.v1
{
    [Route("api/v1/teachers")]
    public class TeacherController : Controller
    {
        private DataContext db;

        public TeacherController(DataContext db)
        {
            this.db = db;
        }
        
        [HttpGet("")]
        public JsonResult Teacher()
        {
            var json =
                db.Teachers
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
        
        [HttpGet("{id}/info")]
        public JsonResult TeacherInfo(int id)
        {
            var json =
                db.Teachers
                    .Where(t => t.TeacherId == id)
                    .Select(t => new
                    {
                        Id = t.TeacherId,
                        Name = t.Name,
                        MiddleName = t.Middlename, 
                        LastName = t.LastName,
                        Degree = t.Degree.Title,
                        Academic = t.Academic.Title,
                        Departament = t.Departament.Title,
                        Email = t.Email,
                        Site = t.Site 
                    })
                    .ToList();
            return new JsonResult(json);
        }
    }
}