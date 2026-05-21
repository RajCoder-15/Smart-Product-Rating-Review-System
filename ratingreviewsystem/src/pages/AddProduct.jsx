import { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      alert("Product Added Successfully");

      setName("");
      setDescription("");
      setRating("");
    } catch (error) {
      console.log(error);
      alert("Error adding product");
    }
  };

  return (
    <div
      style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            color: "black",
            backgroundColor: "white",
            border: "1px solid black"
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Add Product
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            color: "black",
            backgroundColor: "white",
            border: "1px solid black"
          }}
        />

        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            color: "black",
            backgroundColor: "white",
            border: "1px solid black"
          }}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
         style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            color: "black",
            backgroundColor: "white",
            border: "1px solid black"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "15px 30px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;