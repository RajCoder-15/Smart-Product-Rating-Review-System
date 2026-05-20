function ProductCard({ product }) {

  const handleDelete = async () => {

    await fetch(
      `http://localhost:3000/api/products/${product._id}`,
      {
        method: "DELETE",
      }
    );

    window.location.reload();
  };

  return (
    <div className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-105 transition duration-500 shadow-2xl hover:shadow-cyan-500/20">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative z-10">

        <div className="flex items-center justify-between mb-4">

          <h2 className="text-3xl font-bold text-white">
            {product.name}
          </h2>

          <div className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full shadow-lg">
            ⭐ {product.rating}
          </div>

        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          {product.description}
        </p>

        <div className="flex justify-between items-center">

          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-5 py-3 rounded-2xl font-semibold shadow-lg transition duration-300">
            View Details
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-2xl font-semibold transition duration-300"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;