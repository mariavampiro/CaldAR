const express = require('express');
const boilersTypesController = require('../controllers/boilers-types');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware,  boilersTypesController.findAll);

router.get('/:typeId', authMiddleware,  boilersTypesController.findOne);

router.post('/', authMiddleware,  boilersTypesController.create);

router.put('/:typeId', authMiddleware,  boilersTypesController.update);

router.delete('/:id', authMiddleware,  boilersTypesController.delete);

module.exports = router;
