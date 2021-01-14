const express = require('express');
const appointmentsController = require('../controllers/appointments');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, appointmentsController.findAll);
router.post('/', authMiddleware,  appointmentsController.create);
router.get('/:id', authMiddleware,  appointmentsController.findById);
router.put('/:id', authMiddleware,  appointmentsController.editById);
router.delete('/:id', authMiddleware,  appointmentsController.deleteById);

module.exports = router;
