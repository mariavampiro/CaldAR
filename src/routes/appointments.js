const appointmentsController = require("../controllers/appointments");
const express = require("express");
const router = express.Router();

router.get("/", appointmentsController.findAll);
router.post("/", appointmentsController.create);
router.get("/:id", appointmentsController.findById);
router.delete("/:id", appointmentsController.deleteById);

module.exports = router;
