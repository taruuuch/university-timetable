using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NubipApp.Persistence.DataBase;

namespace NubipApp.API.Controllers
{
    public class PublicController : Controller
    {
        private DataContext db;

        public PublicController(DataContext db)
        {
             this.db = db;
        }

        [HttpGet("api/specialities")]
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
        
        [HttpGet("api/faculties")]
        public JsonResult Faculty()
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
        
        [HttpGet("api/departaments")]
        public JsonResult Departament()
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
        
        [HttpGet("api/buildings")]
        public JsonResult Building()
        {
            var json = 
                db.Buildings
                    .Select(b => new
                    {
                        Id = b.BuildingId,
                        Title = b.Number
                    })
                    .ToList();
            return new JsonResult(json);
        }
        
        [HttpGet("api/auditoriums")]
        public JsonResult Auditorium()
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
        
        [HttpGet("api/teachers")]
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
        
        [HttpGet("api/groups")]
        public JsonResult Group()
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
        
        [HttpGet("api/times")]
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
        
        
        [HttpGet("api/speciality/{id}/groups")]
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
        
        [HttpGet("api/type/{id}/subjects")]
        public JsonResult SubjectOfType(int id)
        {
            var json = 
                db.Subjects
                    .Where(s => s.SubjectTypeId == id)
                    .Select(s => new
                    {
                        Id = s.SubjectId,
                        Title = s.Title
                    })
                    .ToList();
            return new JsonResult(json);
        }
        
        [HttpGet("api/teacher/{id}/info")]
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
        
        [HttpGet("api/group/{id}/lessons")]
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
        
        [HttpGet("api/group/{id}")]
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
        
        [HttpGet("api/departament/{id}/teachers")]
        public JsonResult TeacherOfDepartament(int id)
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
        
        [HttpGet("api/building/{id}/auditoriums")]
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