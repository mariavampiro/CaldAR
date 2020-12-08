const express = require('express');
const buildingsController = require('../controllers/buildings');

const router = express.Router();

router.get('/', buildingsController.findAll);

router.get('/:id', buildingsController.findOne);

router.post('/', buildingsController.create);

router.put('/:id', buildingsController.update);

router.delete('/:id', buildingsController.delete);

module.exports = router;
