const { boolean } = require('joi');
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Task', taskSchema);