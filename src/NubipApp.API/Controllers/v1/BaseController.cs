using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NubipApp.Persistence.DataBase;

namespace NubipApp.API.Controllers.v1
{
    public class BaseController : Controller
    {
        private DataContext db;

        public BaseController(DataContext db)
        {
            this.db = db;
        }
        
        [HttpGet("api/v1/times")]
        public JsonResult Time()
        {
            var json = 
                db.Times
                    .Select(t => new
                    {
                        Id = t.TimeId,
                        Number = t.Number,
                        Start = t.Start,
                        End = t.End
                    })
                    .ToList();
            return new JsonResult(json);
        }
    }
}