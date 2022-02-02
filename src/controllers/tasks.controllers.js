// Dependencias
const Tasks = require('../models/Tasks');
const Users = require("../models/Users");

const getTasks = async (req, res) => {
    const tasks = await Users.findById(req.user.userid)
        .populate("tasks")

    res.status(200)
        .json({
            status: 200,
            message: "Tasks consulted successful!",
            body: tasks
        })
};

const getTask = async (req, res) => {
    // Otener los parametros
    const { id } = req.params;

    const task = await Tasks.findById(id);

    if (!task) {
        return res.status(404)
            .json({
                status: 401,
                message: "Task not found",
            })
    }

    return res.status(200)
        .json({
            status: 200,
            message: "task was found!",
            body: task
        })
};

const postTask = async (req, res) => {
    // Obtener el cuewrpo de la peticion
    const { name, description } = req.body;

    const newTask = new Tasks({ name, description });
    await newTask.save();

    const user = await Users.findById(req.user.userid);

    user.tasks.push(newTask);
    await user.save();

    res.status(201)
        .json({
            status: 201,
            message: "Task was created!",
            body: newTask
        });
};

const putTask = async (req, res) => {
    // Obtengo el cuerpo de la petición
    const { id } = req.params;
    const { name, description, done } = req.body;

    const task = await Tasks.findById(id);

    if (!task) {
        return res.status(404)
            .json({
                status: 404,
                message: "Task not found",
            });
    }

    // Guardo y actualizo los datos de mi modelo 
    task.name = name;
    task.description = description;
    task.done = done;
    await task.save();

    // Actualizar un dato sin validar
    // const resp = await Tasks.findByIdAndUpdate(id, { name, description, done });

    return res.status(200)
        .json({
            status: 200,
            message: "Task updated!",
            body: task
        });
};

const patchTask = async (req, res) => {
    // Obtengo el cuerpo de la petición
    const { id } = req.params;

    const task = await Tasks.findById(id);

    if (!task) {
        return res.status(404)
            .json({
                status: 404,
                message: "Task not found",
            });
    }

    task.done = !task.done;
    await task.save();

    return res.status(200)
        .json({
            status: 200,
            message: "Task updated!",
            body: task
        });
};

const deleteTask = async (req, res) => {
    // Obtengo los datos de la url
    const { id } = req.params;

    await Tasks.findByIdAndDelete(id);

    const user = await Users.findById(req.user.userid);

    user.tasks.remove(id); // Quita un elemento del array 

    await user.save();

    return res.status(200)
        .json({
            status: 200,
            message: "Task was deleted!"
        });

};

// Exportación del los controladores
module.exports = {
    getTask,
    deleteTask,
    getTasks,
    postTask,
    putTask,
    patchTask
};