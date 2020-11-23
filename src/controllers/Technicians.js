const fs = require("fs");
const express = require("express");
const router = express.Router();
const technicians = require("../data/technicians.json");

// Get all technicians
router.get("/", (req, res) => {
  const type = +req.query.type;
  if (!type) return res.json(technicians);

  return res.json(technicians.filter((t) => t.type_ids.includes(type)));
});

// Get technician by ID
router.get("/:id", (req, res) => {
  const id = +req.params.id;
  const technician = technicians.find((t) => t.id === id);
  if (!technician) return res.sendStatus(404);

  return res.json(technician);
});

// Delete technician by ID
router.delete("/:id", (req, res) => {
  const id = +req.params.id;
  const deletedTechnician = technicians.find((t) => t.id === id);
  if (!deletedTechnician) return res.sendStatus(404);

  // Technicna found, remove from DB
  const filteredTechnicians = technicians.filter(
    (t) => t.id !== deletedTechnician.id
  );

  const techniciansJSON = JSON.stringify(filteredTechnicians);
  fs.writeFile("./src/data/technicians.json", techniciansJSON, (err) => {
    if (err) return res.status(500).send("Error in saving changes.");

    return res.sendStatus(204);
  });
});

module.exports = router;
