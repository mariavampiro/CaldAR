const fs = require("fs");
const express = require("express");
const router = express.Router();
const boilers = require("../data/boilers.json");

router.get("/", (req, res) => {
  const typeId = +req.query.typeId;
  const warehouse = +req.query.warehouse;
  let filteredBoilers = boilers;

  if (typeId)
    filteredBoilers = filteredBoilers.filter((t) => t.typeId === typeId);

  if (warehouse)
    filteredBoilers = filteredBoilers.filter(
      (t) => t.warehouse_id === warehouse
    );

  return res.json(filteredBoilers);
});

router.get("/:id", (req, res) => {
  const id = +req.params.id;
  const boiler = boilers.find((t) => t.id === id);
  if (!boiler) return res.sendStatus(404);
  return res.json(boiler);
});

router.delete("/:id", (req, res) => {
  const id = +req.params.id;
  const delBoiler = boilers.find((t) => t.id === id);
  if (!delBoiler) return res.sendStatus(404);

  const filteredBoilers = boilers.filter((t) => t.id !== delBoiler.id);

  const boilersJSON = JSON.stringify(filteredBoilers);
  fs.writeFile("./src/data/boilers.json", boilersJSON, (err) => {
    if (err) return res.status(500).send("Error while saving changes.");

    return res.sendStatus(204);
  });
});

module.exports = router;
