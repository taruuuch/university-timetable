using System;
using System.Collections.Generic;

namespace NubipApp.Models.Domain
{
    public class Time
    {
        public int TimeId { get; set; }
        public int Number { get; set; }
        public TimeSpan Start { get; set; }
        public TimeSpan End { get; set; }
        
        public ICollection<Lesson> Lessons { get; set; }
        public ICollection<Request> Requests { get; set; }
    }
}
