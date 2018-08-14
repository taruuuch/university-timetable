using System.Collections.Generic;

namespace NubipApp.Models.Domain
{
    public class Group
    {
        public int GroupId { get; set; }
        public string Title { get; set; }
        public int SpecialityId { get; set; }
        public int TeacherId { get; set; }
        public int EducationLevelId { get; set; }
        public int EducationFormId { get; set; }
        public int StudentCount { get; set; }
        public bool IsActive { get; set; }

        public Speciality Speciality { get; set; }
        public Teacher Teacher { get; set; }
        public EducationLevel EducationLevel { get; set; }
        public EducationForm EducationForm { get; set; }
        
        public ICollection<Lesson> Lessons { get; set; }
    }
}
