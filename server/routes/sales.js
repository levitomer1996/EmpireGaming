var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

let sale = require("../mongoModels/sales");

mongoose.connect("mongodb://localhost/EmpireGaming", {
  useNewUrlParser: true,
  useUnifiedTopology: false
});

router.get("/", (req, res) => {
  sale.find({}, (err, sales) => {
    console.log(sales)
    res.send(sales);
  });
});

module.exports = router;
