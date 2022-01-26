// Dependencias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { KEYS } = require('./config/keys');

// Importacion de Rutas
const routes = require('./routes/routes');

// Instancias
const app = express();

// Configuraciones
app.set('port', KEYS.PORT);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Rutas
app.use(routes);

// Exportación de la aplicación
module.exports = app;

// Configuraciones de la primera clase

// app.get("/:number", (req, res) => {
//     console.log(req.params);

//     res.json({
//         message: "Recivido",
//         value: req.params
//     });
// });

// app.get("/", (req, res) => {

//     const data = {
//         message: "Esto es json"
//     };

//     res.json(data);

// }); 

// app.post("/", (req, res) => {
//     console.log(req.body);

//     res.json("Revivio en post")
// });

// app.put("/", (req, res) => {
//     console.log(req.body);

//     res.json("REvivio en put");
// });

// app.patch("/", (req, res) => {
//     console.log(req.body);

//     res.json("REvivio en patch")
// });

// app.delete("/", (req, res) => {
//     res.json("REvivio en delete")
// });
