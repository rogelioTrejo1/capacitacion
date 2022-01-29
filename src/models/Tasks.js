// Dependencias
const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    create_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = model("Tasks", taskSchema);