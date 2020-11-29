const buildingsController = require("../controllers/buildings");
const express = require("express");
const router = express.Router();

//Retrieve all buildings
router.get("/", buildingsController.findAll);

//Retrieve building by id
//router.get("/:id", buildingsController.findOne);

//Create a new building
//router.post("/", buildingsController.create);

//Update a building with id
//router.put("/:id", buildingsController.update);

//Delete a building with id
//router.delete("/:id", buildingsController.delete);

module.exports = router;
