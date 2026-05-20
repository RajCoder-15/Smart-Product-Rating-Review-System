import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 px-8 py-5">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          ProductVerse
        </h1>

        <div className="flex gap-6 text-gray-300 font-medium">

          <Link
            to="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/add-product"
            className="hover:text-cyan-400 transition"
          >
            Add Product
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;