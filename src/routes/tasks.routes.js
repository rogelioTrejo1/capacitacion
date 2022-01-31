// Dependencias
const { Router } = require('express');

// Controladores
const { getTasks, getTask, postTask, putTask, patchTask, deleteTask } = require("../controllers/tasks.controllers");
const validateToken = require('../middlewares/validateToken');

// Instancias
const router = Router();

router.route("/tasks")
    .all(validateToken)
    .get(getTasks)
    .post(postTask);

router.route("/tasks/:id")
    .all(validateToken)
    .get(getTask)
    .put(putTask)
    .patch(patchTask)
    .delete(deleteTask);


// router.get("/tasks", validateToken, getTasks);
// router.get("/tasks/:id", getTask);
// router.post("/tasks", postTask);
// router.put("/tasks/:id", putTask);
// router.patch("/tasks/:id", patchTask);
// router.delete("/tasks/:id", deleteTask);

// Exporto el enrutador
module.exports = router;