// Require in and use the .env
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

// Controllers
const answers = require("./controller/answers.controller");

// Middleware
app.use(express.json());

// Routes
app.use("/answers", answers);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
