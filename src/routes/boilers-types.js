const boilersTypesController = require("../controllers/boilers-types");
const express = require("express");
const router = express.Router();

//Retrieve all boilers types data
router.get("/", boilersTypesController.findAll);

//Retrieve boilerstype by id
router.get("/:typeId", boilersTypesController.findOne);

//Create a new boilerstype
router.post("/", boilersTypesController.create);

//Update a boilerstype with typeId
router.put("/:typeId", boilersTypesController.update);

//Delete a boilerstype with typeId
router.delete("/:id", boilersTypesController.delete);

module.exports = router;