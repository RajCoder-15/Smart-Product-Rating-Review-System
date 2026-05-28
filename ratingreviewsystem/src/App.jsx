import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import AddProduct from "./pages/AddProduct";

import Login from "./pages/Login";

import Register from "./pages/Register";


function App() {

  const token =
    localStorage.getItem("token");


  return (

    <div className="min-h-screen bg-black text-white">

      {token && <Navbar />}

      <Routes>

        <Route
          path="/login"
          element={
            token
              ? <Navigate to="/" />
              : <Login />
          }
        />

        <Route
          path="/register"
          element={
            token
              ? <Navigate to="/" />
              : <Register />
          }
        />

        <Route
          path="/"
          element={
            token
              ? <Home />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/add-product"
          element={
            token
              ? <AddProduct />
              : <Navigate to="/login" />
          }
        />

      </Routes>

    </div>
  );
}

export default App;