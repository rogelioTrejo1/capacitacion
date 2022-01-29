// Dependencias
const Users = require('../models/Users');
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    // Obtengo los datos del cuerpo de la petición
    const { username, password } = req.body;

    // Valido si existe el usuario
    const user = await Users.findOne({ username });
    if (!user)
        return res.status(404)
            .json({
                status: 404,
                message: "User not found!"
            });

    // Valido las contraseñas
    if (user.password !== password)
        return res.status(401)
            .json({
                status: 401,
                message: "Password is not correct!"
            });

    return res.status(200)
        .json({
            status: 200,
            message: "Login successful!",
            body: {
                token: jwt.sign({ userid: user._id }, "secretWord", {
                    expiresIn: "1d"
                })
            }
        });

    
};

const register = async (req, res) => {
    // Obtengo los datos del cuerpo de la petición
    const { username, password } = req.body;

    const newUser = new Users({ username, password })
    await newUser.save();

    res.status(201)
        .json({ 
            status: 201,
            message: "User created!",
            body: newUser
        });
};

module.exports = {
    login,
    register
};