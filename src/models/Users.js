// Dependencias
const { model, Schema, Types } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tasks: [{
        type: Types.ObjectId,
        required: false,
        ref: "Tasks"
    }]
});

module.exports = model("Users", userSchema);