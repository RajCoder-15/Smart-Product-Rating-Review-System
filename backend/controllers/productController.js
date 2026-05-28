const Product = require("../models/product");


const addProduct = async (req, res) => {

  try {

    const {
      name,
      description,
      rating,
    } = req.body;

    const product =
      await Product.create({
        name,
        description,
        rating,
      });

    res.status(201).json(product);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};



const getProducts = async (req, res) => {

  try {

    const products =
      await Product.find();

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};



const deleteProduct = async (req, res) => {

  try {

    await Product.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Product deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


module.exports = {
  addProduct,
  getProducts,
  deleteProduct,
};