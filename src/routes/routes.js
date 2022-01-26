// Dependencias
const { Router } = require('express');

// Instancias
const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Wellcome to my API" });
});

// Exporto el enrutador
module.exports = router;