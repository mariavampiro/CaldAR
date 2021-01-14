const express = require('express');
const customersController = require('../controllers/customers');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, customersController.findAll);

router.get('/:id', authMiddleware, customersController.findOne);

router.post('/', authMiddleware,  customersController.create);

router.put('/:id', authMiddleware,  customersController.update);

router.delete('/:id', authMiddleware,  customersController.delete);

module.exports = router;
