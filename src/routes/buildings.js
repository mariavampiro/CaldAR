const express = require('express');
const buildingsController = require('../controllers/buildings');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware,  buildingsController.findAll);

router.get('/:id', authMiddleware,  buildingsController.findOne);

router.post('/', authMiddleware,  buildingsController.create);

router.put('/:id', authMiddleware,  buildingsController.update);

router.delete('/:id', authMiddleware,  buildingsController.delete);

module.exports = router;
