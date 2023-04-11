const router = require("express").Router();
const db = require("../helpers/pokemonDB.json");
const fs = require("fs");
const fsPath = "./helpers/pokemonDB.json";

// Getting a Pokemon by ID
router.get("/:id", (req, res) => {
  try {
    const id = req.params.id;

    let pokemon = db.filter((obj) => obj.id == id);

    res.status(200).json({
      status: `Found pokemon at id: ${id}`,
      pokemon,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// Get all Pokemon
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

// New Pokemon
router.post("/create", (req, res) => {
  try {
    // Object Destructuring to help individually grab the keys & values (properties) of our character object coming from req.body
    let {
      name,
      hitPoints,
      attack,
      defense,
      description,
      abilities,
      evolution,
      image,
      id,
    } = req.body;

    // Use math to create an id for the new character
    let newId = db.length + 1;

    // Declare and assign newChar object
    const newPokemon = {
      name,
      hitPoints,
      attack,
      defense,
      description,
      abilities,
      evolution,
      image,
      id: newId,
    };

    fs.readFile(fsPath, (err, data) => {
      if (err) throw err;

      const database = JSON.parse(data);

      let currentIDs = [];

      database.forEach((obj) => {
        currentIDs.push(obj.id);
      });

      if (currentIDs.includes(newId)) {
        let maxValue = Math.max(...currentIDs);
        newId = maxValue + 1;
        newPokemon.id = newId;
      }

      database.push(newPokemon);

      fs.writeFile(fsPath, JSON.stringify(database), (err) => console.log(err));

      res.status(200).json({
        status: `Created new Pokemon ${newPokemon.name}!`,
        newPokemon,
      });
    });
  } catch (err) {
    res.status(422).json({
      error: err.message,
    });
  }
});

// Search

router.get("/query/", (req, res) => {
  // console.log(req.query); // an object of the key and value after the second / { firstName: '"Will"' }

  try {
    const {
      name,
      hitPoints,
      attack,
      defense,
      description,
      abilities,
      evolution,
      image,
      id,
    } = req.query;
    // values passed within URL need to match
    // ex: /query/?firstName=John&lastName=Doe  etc.

    res.status(200).json({
      status: "Found Pokemon!",
      results: {
        name: name,
        hitPoints: hitPoints,
        attack: attack,
        defense: defense,
        description: description,
        abilities: abilities,
        evolution: evolution,
        image: image,
        id: id,
      },
    });
  } catch (err) {
    res.status(500).json({
      results: "Rejected",
      error: err,
    });
  }
});

module.exports = router;
