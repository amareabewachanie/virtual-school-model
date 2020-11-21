using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using model.api.Data;

namespace model.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GradesController: ControllerBase
    {
        private readonly DataContext _context;

        public GradesController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var grades=await _context.Grades.ToListAsync();
            return Ok(grades);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGrade(int id)
        {
            var grade=await _context.Grades.FirstOrDefaultAsync(x=>x.Id==id);
            return Ok(grade);
        }
    }
}