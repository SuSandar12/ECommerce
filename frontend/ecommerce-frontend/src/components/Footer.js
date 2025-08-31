export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p className="text-gray-400 text-sm">
            This is ecommerce demo app by Suzy Swe.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-green-500 transition-colors">Home</a></li>
            <li><a href="/products" className="hover:text-green-500 transition-colors">Products</a></li>
            <li><a href="/cart" className="hover:text-green-500 transition-colors">Cart</a></li>
            <li><a href="/contact" className="hover:text-green-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Email: support@ecommerce.com</li>
            <li>Phone: +65 1234 5678</li>
            <li>Address: 123 Shopping St, Singapore</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; 2025 Suzy Swe. All rights reserved.
      </div>
    </footer>
  );
}
