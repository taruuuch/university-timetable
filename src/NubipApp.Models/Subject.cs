namespace NubipApp.Models
{
    public class Subject
    {
        public int SubjectId { get; set; }
        public string Title { get; set; }
        public int SubjectTypeId { get; set; }

        public SubjectType SubjectType { get; set; }
    }
}
