const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", bookRoutes);

module.exports = app;
