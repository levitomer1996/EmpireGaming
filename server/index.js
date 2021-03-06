const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;
app.use(cors());
app.use(express.json());

var sales = require("./routes/sales");
var users = require("./routes/users");

app.use("/sales", sales);
app.use("/users", users);
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Empire Gaming is running on ${port}!`));
