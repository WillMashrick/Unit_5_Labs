const router = require("express").Router();
const db = require("../api/answers.json");

// Get answers
router.get("/", (req, res) => {
  try {
    res.status(200).json({
      results: db,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;
