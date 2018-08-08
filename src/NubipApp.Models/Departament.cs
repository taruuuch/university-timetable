using System.Collections.Generic;

namespace NubipApp.Models
{
    public class Departament
    {
        public int DepartamentId { get; set; }
        public string Title { get; set; }
        public string Dean { get; set; }
        public int FacultyId { get; set; }
        public string Email { get; set; }

        public Faculty Faculty { get; set; }

        public ICollection<Teacher> Teachers { get; set; }
        public ICollection<Curriculum> Curriculums { get; set; }
    }
}
