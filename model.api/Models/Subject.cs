namespace model.api.Models
{
    public class Subject
    {
        public int  Id{ get; set; }
        public string Name { get; set; }
        public int GradeId { get; set; }
        public Grade Grade { get; set; }
    }
}