const techniciansController = require('../controllers/technicians');
const express = require('express');
const router = express.Router();

router.get('/', techniciansController.findAll);
router.post('/', techniciansController.create);
router.get('/:id', techniciansController.findById);
router.put('/:id', techniciansController.editById);
router.delete('/:id', techniciansController.deleteById);

module.exports = router;
