const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

 rating: {
  type: Number,
  required: true,
},

  reviews: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);