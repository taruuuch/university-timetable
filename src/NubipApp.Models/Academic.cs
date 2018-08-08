using System.Collections.Generic;

namespace NubipApp.Models
{
    public class Academic
    {
        public int AcademicId { get; set; }
        public string Title { get; set; }
        
        public ICollection<Teacher> Teachers { get; set; }
    }
}
