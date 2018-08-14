using System.Collections.Generic;

namespace NubipApp.Models.Domain
{
    public class Degree
    {
        public int DegreeId { get; set; }
        public string Title { get; set; }
        
        public ICollection<Teacher> Teachers { get; set; }
    }
}
