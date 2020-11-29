const customersController = require("../controllers/customers");
const express = require("express");
const router = express.Router();

//Retrieve all customers
router.get("/", customersController.findAll);

//Retrieve customer by id
router.get("/:id", customersController.findOne);

//Create a new customer
//router.post("/", customersController.create);

//Update a customer with id
//router.put("/:id", customersController.update);

//Delete a building with id
//router.delete("/:id", customersController.delete);

module.exports = router;
