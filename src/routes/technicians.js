const express = require('express');
const techniciansController = require('../controllers/technicians');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware,  techniciansController.findAll);
router.post('/', authMiddleware,  techniciansController.create);
router.get('/:id', authMiddleware,  techniciansController.findById);
router.put('/:id', authMiddleware,  techniciansController.editById);
router.delete('/:id', authMiddleware,  techniciansController.deleteById);

module.exports = router;
