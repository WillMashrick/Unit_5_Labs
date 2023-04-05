const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (request, response) => {
  response.send("<h1>Hello, World!</h1>");
});

app.get("/party", (req, res) => {
  res.send("<h2>Party Time!</h2>");
});

app.get("/excellent", (req, res) => {
  res.send("<h2>Excellent!</h2>");
});

app.get("/smile", (req, res) => {
  res.send("<h1>:-)</h1>");
});

// app.get("/:key", (request, response) => {
//   console.log(request.params);
// });

app.get("/:page", (request, response) => {
  response.send(`You are currently on page: ${request.params.page}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
