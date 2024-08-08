const Database = require("./src/config/db")
const Product = require("./src/models/Product.model")
const Product_json = require("./product.json")

const get = async ()=>{
    try {
        await Database(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(Product_json);
        console.log("Data successfully inserted");
      } catch (error) {
        console.error("Error inserting data:", error);
      }
}

get()