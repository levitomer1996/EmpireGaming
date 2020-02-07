let mongoose = require("mongoose");

let saleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

let sales = (module.exports = mongoose.model("sale", saleSchema));
