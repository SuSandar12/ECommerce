using EcommerceAPI.Data;
using EcommerceAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace EcommerceAPI.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext appDbContext)
        {
            _context = appDbContext;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("{UserId}")]
        public async Task<ActionResult> GetUserById(string UserId)
        {
            var user = await _context.Users.FindAsync(UserId);

            if (user == null) return NotFound(new
            {
                Message = "User not found"
            });

            return Ok(new
            {
                user.Id,
                user.Username,
                user.Email,
                user.PhoneNumber,
                user.Address
            });
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(string id, [FromBody] UserUpdateDto dto)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
                return NotFound(new { Message = "User not found." });

            user.Username = dto.Username ?? user.Username;
            user.Email = dto.Email ?? user.Email;
            user.PhoneNumber = dto.PhoneNumber ?? user.PhoneNumber;
            user.Address = dto.Address ?? user.Address;

            _context.Users.Update(user);
            await _context.SaveChangesAsync();

            return Ok(new { Message = "User updated successfully.", user });
        }

    }
}