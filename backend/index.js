const express = require("express");
const dotenv = require("dotenv");
const PORT = 8080;
const Database = require('./src/config/db');
const cors = require('cors');
const product_database = require("./src/routes/Productapi_routes");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.use("/products", product_database);

app.listen(PORT, () => {
    try {
        Database();
        console.log(`Server is running on PORT: ${PORT}`);
    } catch (error) {
        console.log(error);
    }
});
