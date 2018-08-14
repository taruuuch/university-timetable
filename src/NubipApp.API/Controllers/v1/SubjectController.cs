using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NubipApp.Persistence.DataBase;

namespace NubipApp.API.Controllers.v1
{
    [Route("api/v1/subjects")]
    public class SubjectController : Controller
    {
        private DataContext db;

        public SubjectController(DataContext db)
        {
            this.db = db;
        }
        
        [HttpGet("api/subject/types")]
        public JsonResult SubjectType()
        {
            var json = 
                db.SubjectTypes
                    .Select(s => new
                    {
                        Id = s.SubjectTypeId,
                        Title = s.Title
                    })
                    .ToList();
            return new JsonResult(json);
        }
    }
}