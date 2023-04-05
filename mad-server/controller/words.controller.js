const router = require("express").Router();

router.get("/first-word", (req, res) => {
  res.send("/");
});

router.post("/second-word", (req, res) => {
  try {
    const secondWord = req.body.adjective;
    console.log(secondWord);
  } catch (err) {
    res
      .status(500)
      .send(`<img src="https://http.cat/500" alt="Status code 500"/> `);
  }
});

router.post("/third-word", (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    res
      .status(500)
      .send(`<img src="https://http.cat/500" alt="Status code 500"/> `);
  }
});

router.post("/fourth-word", (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    res
      .status(500)
      .send(`<img src="https://http.cat/500" alt="Status code 500"/> `);
  }
});

router.post("/fifth-word", (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    res
      .status(500)
      .send(`<img src="https://http.cat/500" alt="Status code 500"/> `);
  }
});

router.post("/sixth-word", (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    res
      .status(500)
      .send(`<img src="https://http.cat/500" alt="Status code 500"/> `);
  }
});

module.exports = router;
