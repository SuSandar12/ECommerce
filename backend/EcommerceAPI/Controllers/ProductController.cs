using Microsoft.AspNetCore.Mvc;
using EcommerceAPI.Data;
using EcommerceAPI.Models;
using System.Runtime.ConstrainedExecution;
using System.Runtime.InteropServices.Marshalling;
using System.Diagnostics.CodeAnalysis;
using Microsoft.AspNetCore.Authorization;

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

        [Authorize]
        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(_context.Products.ToList());
        }

        [Authorize]
        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null) return NotFound();
            return Ok(product);
        }

        [Authorize]
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
                Stock = createProduct.Stock,
                IsActive = true, 
                CreatedAt = DateTime.Now
            };

            product.Id = $"PROD{nextNumber:D4}";
            _context.Products.Add(product);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        [Authorize]
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

        [Authorize]
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