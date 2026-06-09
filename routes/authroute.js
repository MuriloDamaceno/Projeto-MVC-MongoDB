const express = require('express');
const router = express.Router();
const usuario = require('../controllers/authController');
const auth = require('../middlewares/auth');
const produto = require('../controllers/userController');

// rota pública
router.get('/login', usuario.showLogin);
router.post('/login', usuario.login);
router.get('/logout', usuario.logout);

// rota protegida — auth.verify intercepta antes de chegar no controller
router.get('/users', auth.verify, produto.getUsers);

module.exports = router;