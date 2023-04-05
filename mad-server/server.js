const express = require("express");

const app = express();

const PORT = 5000;

const words = require("./controller/words.controller");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));
console.log("pathway: ", __dirname);

app.use("/words", words);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
