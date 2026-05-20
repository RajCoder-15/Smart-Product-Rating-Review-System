const Product = require("../models/product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, rating } = req.body;

   const product = new Product({
        name,
        description,
        rating,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {

  try {

    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
};