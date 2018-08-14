using System.Collections.Generic;

namespace NubipApp.Models.Domain
{
    public class EducationLevel
    {
        public int EducationLevelId { get; set; }
        public string Title { get; set; }
        
        public ICollection<Group> Groups { get; set; }
    }
}