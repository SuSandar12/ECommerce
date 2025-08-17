using EcommerceAPI.Models;

public class CartItem
{
    public int Id { get; set; }
    public string UserId { get; set; }
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    public Product Product { get; set; }
}

public class Order
{
    public int Id { get; set; }
    public string UserId { get; set; }
    public DateTime OrderDate { get; set; }
    public string Status { get; set; }//pending, Confirmed, Delivered
    public string PaymentMethod { get; set; } = "Cash On Delivery";
    public string ShippmentMethod { get; set; } = "Door to Door";
    public ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();
}
public class OrderItem
{
    public int Id { get; set; }
    public int OrderId { get; set; }
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    public decimal Price { get; set; }
    public Product Product{ get; set; }
}