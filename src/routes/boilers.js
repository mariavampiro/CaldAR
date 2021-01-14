const express = require('express');
const boilersController = require('../controllers/boilers');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware,  boilersController.findAll);
router.post('/', authMiddleware,  boilersController.create);
router.get('/:id', authMiddleware,  boilersController.findById);
router.put('/:id', authMiddleware,  boilersController.editById);
router.delete('/:id', authMiddleware,  boilersController.deleteById);

module.exports = router;
