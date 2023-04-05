const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.static(`${__dirname}/public`));
console.log("pathway: ", __dirname);

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/public` + "/index.html");
});

app.get("/party", function (req, res) {
  res.sendFile(`${__dirname}/public` + "/party.html");
});

app.get("/time", function (req, res) {
  res.sendFile(`${__dirname}/public` + "/time.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
