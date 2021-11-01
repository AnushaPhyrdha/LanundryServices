const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

const app = express();

const db =
  "mongodb+srv://Ashutosh:LaundryPassword@cluster0.qd20p.mongodb.net/LaundryServices?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error", err);
  });
app.use(cors());

require("./models/user");

app.use(express.json());
app.use(require("./routes/auth"));

app.listen(port, () => {
  console.log(`Server is running on Port :: ${port}`);
});
