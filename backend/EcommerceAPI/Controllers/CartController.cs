using EcommerceAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class CartController : ControllerBase
{
    private readonly AppDbContext _context;

    public CartController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("{userId}")]
    public async Task<ActionResult<IEnumerable<CartItem>>> GetCart(string userId)
    {
        return await _context.CartItems
            .Include(c => c.Product)
            .Where(c => c.UserId == userId)
            .ToListAsync();
    }

    [HttpPost("{userId}/add")]
    public async Task<IActionResult> AddToCart(string userId, [FromBody] CartItem item)
    {
        item.UserId = userId;
        _context.CartItems.Add(item);
        await _context.SaveChangesAsync();
        return Ok(item);
    }

    [HttpDelete("{userId}/remove/{itemId}")]
    public async Task<IActionResult> RemoveFromCart(string userId, int itemId)
    {
        var cartItem = await _context.CartItems.FindAsync(itemId);
        if (cartItem == null || cartItem.UserId != userId) return NotFound();

        _context.CartItems.Remove(cartItem);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{userId}/clear")]
    public async Task<IActionResult> ClearCart(string userId)
    {
        var items = _context.CartItems.Where(c => c.UserId == userId);
        _context.CartItems.RemoveRange(items);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
