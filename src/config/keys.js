// Dependencias
const dotenv = require('dotenv');
dotenv.config();

const KEYS = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.DB_URI || ""
};

module.exports = { 
    KEYS
};
