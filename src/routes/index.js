const express = require('express');
const appointmentsRoutes = require('./appointments');
const boilersRoutes = require('./boilers');
const buildingsRoutes = require('./buildings');
const customersRoutes = require('./customers');
const techniciansRoutes = require('./technicians');
const boilersTypesRoutes = require('./boilers-types');

const router = express.Router();

router.use('/api/appointments', appointmentsRoutes);
router.use('/api/boilers', boilersRoutes);
router.use('/api/buildings', buildingsRoutes);
router.use('/api/customers', customersRoutes);
router.use('/api/technicians', techniciansRoutes);
router.use('/api/boilersTypes', boilersTypesRoutes);

module.exports = router;
