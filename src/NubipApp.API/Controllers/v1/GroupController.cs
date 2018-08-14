using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NubipApp.Persistence.DataBase;

namespace NubipApp.API.Controllers.v1
{
    [Route("api/v1/groups")]
    public class GroupController : Controller
    {
        private DataContext db;

        public GroupController(DataContext db)
        {
            this.db = db;
        }

        [HttpGet("")]
        public JsonResult GetList()
        {
            var json = 
                db.Groups
                    .Select(g => new
                    {
                        Id = g.GroupId,
                        Title = g.Title
                    })
                    .ToList();
            return new JsonResult(json);
        }
        
        [HttpGet("{id}")]
        public JsonResult GroupInfo(int id)
        {
            var json =
                db.Groups
                    .Where(g => g.GroupId == id)
                    .Select(g => new
                    {
                        Id = g.GroupId,
                        Title = g.Title,
                        Faculty = g.Speciality.Faculty.Title, 
                        Speciality = g.Speciality.Title,
                        Teacher = g.Teacher.LastName,
                        Students = g.StudentCount,
                        EducationLevel = g.EducationLevel.Title,
                        EducationForm = g.EducationForm.Title
                    })
                    .ToList();
            return new JsonResult(json);
        }
        
        [HttpGet("{id}/lessons")]
        public JsonResult LessonForGroup(int id)
        {
            var json =
                db.Lessons
                    .Where(l => l.GroupId == id)
                    .OrderBy(l => l.Day)
                    .ThenBy(l => l.Time.Number)
                    .Select(l => new
                    {
                        WeekDay = l.Day,
                        SubjectNumber = l.Time.Number,
                        WeekNumber = l.Week,
                        SubGroupNumber = l.SubGroup,
                        SubjectTitle = l.Curriculum.Subject.Title,
                        SubjectType = l.Curriculum.Subject.SubjectType.Title,
                        Auditorium = l.Auditorium.Number,
                        Building = l.Auditorium.Building.Number,
                        BuildingLat = l.Auditorium.Building.Latitude,
                        BuildingLong = l.Auditorium.Building.Longitude,
                        Group = l.Group.Title,
                        TeacherId = l.TeacherId,
                        TeacherName = l.Teacher.Name,
                        TeacherMiddlename = l.Teacher.Middlename,
                        TeacherLastname = l.Teacher.LastName,
                        TeacherAcademic = l.Teacher.Academic.Title,
                        TimeStart = l.Time.Start,
                        TimeEnd = l.Time.End
                    })
                    .ToList();
            return new JsonResult(json);
        }
    }
}