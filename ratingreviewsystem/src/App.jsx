import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";

import { Routes, Route } from "react-router-dom";

function App() {

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/add-product"
          element={<AddProduct />}
        />

        <Route
          path="/product-details"
          element={<ProductDetails />}
        />

      </Routes>

    </div>
  );
}

export default App;