const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    limit_Date: {
        type: Date,
        required: true,
    },
    is_Done: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;