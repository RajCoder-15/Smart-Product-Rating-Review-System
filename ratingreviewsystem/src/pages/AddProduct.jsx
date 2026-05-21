import { useState } from "react";

function AddProduct() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
const handleSubmit = async (e) => {

  e.preventDefault();
  console.log(name, description, rating);

  try {

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/products`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          description,
          rating,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    alert("Product Added");

    setName("");
    setDescription("");
    setRating("");

  } catch (error) {

    console.log(error);

    alert("Error adding product");

  }

};

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">

      <div className="bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Add Product
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Rating (1-5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
           />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddProduct;