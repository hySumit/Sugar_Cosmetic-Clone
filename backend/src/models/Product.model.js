const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    shades: { type: Number, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    club_price: { type: Number, required: true },
    rating: { type: Number, required: true },
    user_rated: { type: Number, required: true },
    category: { type: String, required: true },
    images: { type: [String], required: true },
  },
  { versionKey: false }
);

const Product = model("Product", productSchema);

module.exports = Product;
