const appointmentsRoutes = require("./appointments");
const boilersRoutes = require("./boilers");
const buildingsRoutes = require("./buildings");
const customersRoutes = require("./customers");
const techniciansRoutes = require("./technicians");

const express = require("express");
const router = express.Router();

router.use("/appointments", appointmentsRoutes);
router.use("/boilers", boilersRoutes);
router.use("/buildings", buildingsRoutes);
router.use("/customers", customersRoutes);
router.use("/technicians", techniciansRoutes);

module.exports = router;
