using System.Collections.Generic;

namespace NubipApp.Models
{
    public class Speciality
    {
        public int SpecialityId { get; set; }
        public string Title { get; set; }
        public int FacultyId { get; set; }

        public Faculty Faculty { get; set; }
        
        public ICollection<Group> Groups { get; set; }
        public ICollection<Curriculum> Curriculums { get; set; }
    }
}
