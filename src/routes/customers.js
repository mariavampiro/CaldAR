const express = require('express');
const customersController = require('../controllers/customers');

const router = express.Router();

router.get('/', customersController.findAll);

router.get('/:id', customersController.findOne);

router.post('/', customersController.create);

router.put('/:id', customersController.update);

router.delete('/:id', customersController.delete);

module.exports = router;
