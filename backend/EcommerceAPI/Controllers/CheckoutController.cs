using EcommerceAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace EcommerceAPI.Controllers
{
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
        public async Task<IActionResult> Checkout(string userId, [FromBody] CheckoutRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Address) || string.IsNullOrWhiteSpace(request.PhoneNumber))
                return BadRequest("Address and PhoneNumber are required.");

            // Load cart items
            var cartItems = await _context.CartItems
                .Include(c => c.Product)
                .Where(c => c.UserId == userId)
                .ToListAsync();

            if (!cartItems.Any())
                return BadRequest("Cart is empty.");

            // Create order
            var order = new Order
            {
                UserId = userId,
                DeliveryName = request.Name,
                DeliveryAddress = request.Address,
                DeliveryPhone = request.PhoneNumber,
                PaymentMethod = "CashOnDelivery",
                Status = "Pending",
                Items = cartItems.Select(c => new OrderItem
                {
                    ProductId = c.ProductId,
                    Quantity = c.Quantity,
                    Price = c.Product.Price
                }).ToList(),
                OrderDate = DateTime.UtcNow
            };

            _context.Orders.Add(order);
            _context.CartItems.RemoveRange(cartItems);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                Message = "Order placed successfully with Cash on Delivery.",
                OrderId = order.Id,
                DeliveryAddress = order.DeliveryAddress,
                PhoneNumber = order.DeliveryPhone
            });
        }
    }
}