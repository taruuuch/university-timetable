using System.Collections.Generic;

namespace NubipApp.Models.Domain
{
    public class Curriculum
    {
        public int CurriculumId { get; set; }
        public int DepartamentId { get; set; }
        public int SubjectId { get; set; }
        public int LectionCount { get; set; }
        public int LabaratorCount { get; set; }
        public int Semester { get; set; }

        public Speciality Speciality { get; set; }
        public Departament Departament { get; set; }
        public Subject Subject { get; set; }
        
        public ICollection<Lesson> Lessons { get; set; }
    }
}
