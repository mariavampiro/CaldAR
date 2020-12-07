const express = require('express');
const appointmentsController = require('../controllers/appointments');

const router = express.Router();

router.get('/', appointmentsController.findAll);
router.post('/', appointmentsController.create);
router.get('/:id', appointmentsController.findById);
router.put('/:id', appointmentsController.editById);
router.delete('/:id', appointmentsController.deleteById);

module.exports = router;
