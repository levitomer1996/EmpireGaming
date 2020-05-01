let mongoose = require("mongoose");

let saleSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
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
