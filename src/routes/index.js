const express = require('express');
const appointmentsRoutes = require('./appointments');
const boilersRoutes = require('./boilers');
const buildingsRoutes = require('./buildings');
const customersRoutes = require('./customers');
const techniciansRoutes = require('./technicians');
const boilersTypesRoutes = require('./boilers-types');
const authRoutesRoutes = require('./authRoutes');

const router = express.Router();

router.use('/appointments', appointmentsRoutes);
router.use('/boilers', boilersRoutes);
router.use('/buildings', buildingsRoutes);
router.use('/customers', customersRoutes);
router.use('/technicians', techniciansRoutes);
router.use('/boilersTypes', boilersTypesRoutes);
router.use('/', authRoutesRoutes);

module.exports = router;
