using System.Collections.Generic;

namespace model.api.Models
{
    public class Grade
    {
        public int Id { get; set; }
        public int Level { get; set; }
        public ICollection<Subject> Subjects { get; set; }
    }
}