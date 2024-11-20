const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register); // Ruta para registrarse
router.post('/login', login);       // Ruta para iniciar sesión

module.exports = router;
