const express = require('express');
const boilersController = require('../controllers/boilers');

const router = express.Router();

router.get('/', boilersController.findAll);
router.post('/', boilersController.create);
router.get('/:id', boilersController.findById);
router.put('/:id', boilersController.editById);
router.delete('/:id', boilersController.deleteById);

module.exports = router;
