using System.Collections.Generic;

namespace NubipApp.Models
{
    public class Building
    {
        public int BuildingId { get; set; }
        public int Number { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        
        public ICollection<Auditorium> Auditoriums { get; set; }
        public ICollection<Faculty> Faculties { get; set; }
    }
}
