require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/dbCon");
const cors = require("cors");

connectDB();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/expenses", require("./routes/getAllExpense"));
app.use("/expense", require("./routes/getSingleExpense"));
app.use("/delete", require("./routes/deleteExpense"));
app.use("/add", require("./routes/postExpense"));
app.use("/update", require("./routes/updateExpense"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(3500, () => console.log(`Server running on port ${3500}`));
});
