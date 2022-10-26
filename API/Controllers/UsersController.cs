using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly AppDbContext _context;
        public UsersController(AppDbContext context)
        {
            _context = context;

        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
            var users = await _context.Users.ToListAsync();
            return users;
        }
         [Authorize]
         [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id){
            return await _context.Users.FindAsync(id);
        }
    }
    }
   
