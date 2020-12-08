const express = require('express');
const boilersTypesController = require('../controllers/boilers-types');

const router = express.Router();

router.get('/', boilersTypesController.findAll);

router.get('/:typeId', boilersTypesController.findOne);

router.post('/', boilersTypesController.create);

router.put('/:typeId', boilersTypesController.update);

router.delete('/:id', boilersTypesController.delete);

module.exports = router;
