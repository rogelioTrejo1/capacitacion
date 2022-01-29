// Dependencias
const { Router } = require('express');

// Controllers
const { login, register } = require('../controllers/auth.controllers')

// Instancias
const router = Router();

router.post("/login", login);
router.post("/register", register);

// Exporto el enrutador
module.exports = router;