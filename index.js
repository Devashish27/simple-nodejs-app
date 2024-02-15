// console.log("Hello There..!!");

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// Creating a middleware component to get the json data
// which as been passed to insomnia tool.
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // making URL in any pattern.

// Routes...
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello From Node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://kayrakyzaghan11turkishgodscom:ONiWZJHXxUwLaQrE@backendnodedb.zq4pcu3.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Database!");
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
