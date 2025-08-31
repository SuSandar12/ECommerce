import { Carousel } from "flowbite-react";
import { Truck, Headphones, Star, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      <Carousel className="h-96">
        <img
          src="/images/banner1.jpg"
          alt="Banner 1"
          className="object-cover w-full h-full"
        />
        <img
          src="/images/banner2.jpg"
          alt="Banner 2"
          className="object-cover w-full h-full"
        />
      </Carousel>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
          <Truck className="mx-auto mb-4 h-10 w-10 text-blue-600" />
          <h3 className="font-semibold">Fast Delivery</h3>
          <p className="text-gray-500 text-sm">
            Get your order on time, every time.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
          <Headphones className="mx-auto mb-4 h-10 w-10 text-green-600" />
          <h3 className="font-semibold">24/7 Support</h3>
          <p className="text-gray-500 text-sm">
            Our team is here whenever you need help.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
          <Star className="mx-auto mb-4 h-10 w-10 text-yellow-500" />
          <h3 className="font-semibold">Top Quality</h3>
          <p className="text-gray-500 text-sm">
            Premium products you can trust.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
          <DollarSign className="mx-auto mb-4 h-10 w-10 text-purple-600" />
          <h3 className="font-semibold">Affordable Price</h3>
          <p className="text-gray-500 text-sm">
            High quality without breaking the bank.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src="/images/banner1.jpg"
          alt="Banner"
          className="rounded-2xl shadow-lg w-full h-80 object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Fresh Arrivals</h2>
          <p className="text-gray-600 mb-4">
            Discover our latest collection with trendy styles and premium
            quality. Perfect for your daily wear and special occasions.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Exclusive Deals</h2>
          <p className="text-gray-600 mb-4">
            Save more with our seasonal discounts and special offers. Limited
            time only!
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700">
            Explore Deals
          </button>
        </div>
        <img
          src="/images/banner2.jpg"
          alt="Deals"
          className="rounded-2xl shadow-lg w-full h-80 object-cover"
        />
      </div>

      
    </div>
  );
}
