const express = require("express");
const router = express.Router();
const boiler_types = require("../data/boiler-types.json");
const fs = require("fs");

router.get("/", (req, res) => {
  if (req.query.typeId === undefined && req.query.description === undefined) {
    res.send(boiler_types);
  } else if (
    req.query.typeId !== undefined &&
    req.query.description === undefined
  ) {
    const idFound = boiler_types.some(
      (boiler_types) => boiler_types.typeId === parseInt(req.query.typeId)
    );

    if (idFound) {
      res.json(
        boiler_types.filter(
          (boiler_types) => boiler_types.typeId === parseInt(req.query.typeId)
        )
      );
    } else {
      res.status(400).json({
        msg: `Did not found boiler type with the id of ${req.query.typeId}`,
      });
    }
  } else if (
    req.query.typeId === undefined &&
    req.query.description !== undefined
  ) {
    const typeFound = boiler_types.some(
      (boiler_types) => boiler_types.description === req.query.description
    );
    if (typeFound) {
      res.json(
        boiler_types.filter(
          (boiler_types) => boiler_types.description === req.query.description
        )
      );
    } else {
      res.status(400).json({
        msg: `Did not found customer with the description of ${req.query.description}`,
      });
    }
  } else {
    res.status(400).json({ msg: `Invalid request parameters` });
  }
});

router.delete("/", (req, res) => {
  const idFound = boiler_types.some(
    (boiler_types) => boiler_types.typeId === parseInt(req.query.typeId)
  );

  if (idFound) {
    let boiler_typesDeleted = boiler_types.filter(
      (boiler_types) => boiler_types.typeId !== parseInt(req.query.typeId)
    );
    res.json({
      msg: "Boiler type successfully deleted",
      boiler_types: boiler_types.filter(
        (boiler_types) => boiler_types.typeId !== parseInt(req.query.typeId)
      ),
    });
    const jsonString = JSON.stringify(boiler_typesDeleted);
    fs.writeFile("./src/data/boiler-types.json", jsonString, (err) => {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success");
      }
    });
  } else {
    res.status(400).json({
      msg: `Did not found boiler type with the id of ${req.query.typeId}`,
    });
  }
});

module.exports = router;
