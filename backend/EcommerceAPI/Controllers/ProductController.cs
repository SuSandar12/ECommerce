using Microsoft.AspNetCore.Mvc;
using EcommerceAPI.Data;
using EcommerceAPI.Models;
using System.Runtime.ConstrainedExecution;
using System.Runtime.InteropServices.Marshalling;

namespace EcommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(_context.Products.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null) return NotFound();
            return Ok(product);
        }

        [HttpPost]
        public IActionResult CreateProduct(CreateProduct createProduct)
        {
            var lastProduct = _context.Products
                                .OrderByDescending(p => p.Id)
                                .FirstOrDefault();

            int nextNumber = 1;
            if (lastProduct != null)
            {
                string lastId = lastProduct.Id.Replace("PROD", "");
                nextNumber = int.Parse(lastId) + 1;
            }
            var product = new Product
            {
                Name = createProduct.Name,
                Description = createProduct.Description,
                Category = createProduct.Category,
                Stock = createProduct.Stock
            };

            product.Id = $"PROD{nextNumber:D5}";
            _context.Products.Add(product);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, Product updatedProduct)
        {
            var product = _context.Products.Find(id);
            if (product == null) return NotFound();

            product.Name = updatedProduct.Name;
            product.Description = updatedProduct.Description;
            product.Category = updatedProduct.Category;
            product.Stock = updatedProduct.Stock;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null) return NotFound();

            _context.Products.Remove(product);
            _context.SaveChanges();
            return NoContent();
        }
    }
}