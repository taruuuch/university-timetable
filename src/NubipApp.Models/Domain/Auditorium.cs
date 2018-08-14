using System.Collections.Generic;

namespace NubipApp.Models.Domain
{
    public class Auditorium
    {
        public int AuditoriumId { get; set; }
        public int Number { get; set; }
        public int BuildingId { get; set; }
        public int SeatseCount { get; set; }
        public int AuditoriumTypeId { get; set; }

        public AuditoriumType AuditoriumType { get; set; }
        public Building Building { get; set; }
        
        public ICollection<Lesson> Lessons { get; set; }
    }
}
