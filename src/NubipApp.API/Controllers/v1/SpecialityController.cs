using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NubipApp.Persistence.DataBase;

namespace NubipApp.API.Controllers.v1
{
    [Route("api/v1/specialities")]
    public class SpecialityController : Controller
    {
        private DataContext db;

        public SpecialityController(DataContext db)
        {
            this.db = db;
        }
        
        [HttpGet("")]
        public JsonResult Speciality()
        {
            var json = 
                db.Specialitys
                    .Select(s => new
                    {
                        Id = s.SpecialityId,
                        Title = s.Title
                    })
                    .ToList();
            return new JsonResult(json);
        }
        
        [HttpGet("{id}/groups")]
        public JsonResult GroupOfSpeciality(int id)
        {
            var json = 
                db.Groups
                    .Where(g => g.SpecialityId == id)
                    .Select(g => new
                    {
                        Id = g.GroupId,
                        Title = g.Title
                    })
                    .ToList();
            return new JsonResult(json);
        }
    }
}