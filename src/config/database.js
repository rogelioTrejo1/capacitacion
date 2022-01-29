// Dependencias 
const mongoose = require('mongoose');
const { KEYS } = require('./keys');

const newConnection = async () => {
    await mongoose.connect(KEYS.DB_URI);

    console.log(">> BD is Conected!");
};

module.exports = { newConnection };