using NubipApp.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace NubipApp.Persistence.DataBase
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Academic> Academics { get; set; }
        public DbSet<Auditorium> Auditoriums { get; set; }
        public DbSet<AuditoriumType> AuditoriumTypes { get; set; }
        public DbSet<Building> Buildings { get; set; }
        public DbSet<Curriculum> Curriculums { get; set; }
        public DbSet<Degree> Degrees { get; set; }
        public DbSet<Departament> Departaments { get; set; }
        public DbSet<Faculty> Facultys { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<Speciality> Specialitys { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<SubjectType> SubjectTypes { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Time> Times { get; set; }
        public DbSet<EducationLevel> EducationLevels { get; set; }
        public DbSet<EducationForm> EducationForms { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=nubipschedule;Username=nubip;Password=nubip12345");
        }

        //protected void OnModleCreating(ModelBuilder modelBuilder)
        //{
        //    //modelBuilder.Entity<>()
        //}
    }
}