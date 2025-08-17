using EcommerceAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class CheckoutController : ControllerBase
{
    private readonly AppDbContext _context;

    public CheckoutController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("{userId}")]
    public async Task<IActionResult> Checkout(string userId)
    {
        var cartItems = await _context.CartItems
            .Include(c => c.Product)
            .Where(c => c.UserId == userId)
            .ToListAsync();

        if (!cartItems.Any())
            return BadRequest("Cart is empty.");

        var order = new Order
        {
            UserId = userId,
            PaymentMethod = "CashOnDelivery",
            Status = "Pending",
            Items = cartItems.Select(c => new OrderItem
            {
                ProductId = c.ProductId,
                Quantity = c.Quantity,
                Price = c.Product.Price
            }).ToList()
        };

        _context.Orders.Add(order);
        _context.CartItems.RemoveRange(cartItems); 
        await _context.SaveChangesAsync();

        return Ok(new
        {
            Message = "Order placed successfully with Cash on Delivery.",
            OrderId = order.Id
        });
    }
}
