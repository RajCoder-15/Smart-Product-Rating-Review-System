import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (selectedRating > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.rating >= selectedRating
    );
  }

  if (sortOrder === "high") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  if (sortOrder === "low") {
    filteredProducts.sort((a, b) => a.rating - b.rating);
  }

   return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Discover Products
          </h1>

          <p className="text-gray-400 text-lg">
            Find the best rated products instantly
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 mb-10 shadow-2xl">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <input
              type="text"
              placeholder="Search Products..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-black/30 border border-gray-700 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(Number(e.target.value))}
              className="bg-black/30 border border-gray-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="0">All Ratings</option>
              <option value="1">1 Star & Above</option>
              <option value="2">2 Stars & Above</option>
              <option value="3">3 Stars & Above</option>
              <option value="4">4 Stars & Above</option>
              <option value="5">5 Stars</option>
            </select>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-black/30 border border-gray-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">Sort By</option>
              <option value="high">Highest Rating</option>
              <option value="low">Lowest Rating</option>
            </select>
          
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;