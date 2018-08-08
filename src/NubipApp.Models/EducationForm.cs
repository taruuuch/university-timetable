﻿using System.Collections.Generic;

namespace NubipApp.Models
{
    public class EducationForm
    {
        public int EducationFormId { get; set; }
        public string Title { get; set; }
        
        public ICollection<Group> Groups { get; set; }
    }
}