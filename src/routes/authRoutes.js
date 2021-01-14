const express = require('express');
const authController = require('../controllers/authContoller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router
  .post('/register', authMiddleware,  authController.register)
  .post('/login', authMiddleware,  authController.login)
  .post('/logout', authMiddleware,  authMiddleware.logout)

module.exports = router;
