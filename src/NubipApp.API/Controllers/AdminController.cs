using Microsoft.AspNetCore.Mvc;
using NubipApp.Models.Domain;
using NubipApp.Persistence.DataBase;

namespace NubipApp.API.Controllers
{
    public class AdminController : Controller
    {
        private DataContext db;

        public AdminController(DataContext db)
        {
            this.db = db;
        }
        
        [HttpPost("api/lesson/add")]
        public IActionResult Post([FromBody]Lesson lesson)
        {
            return Ok(db.Lessons.Add(lesson));
        }
    }
}