const mongoose = require('mongoose');

let Todo = mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    desc: {
        type: String,
        required: true, 
    },
    priority: {
        type: String,
        enum:['Urgent', 'Important', 'Not Important'],
        default: 'Important'
    },
    status: {
        type: String,
        enum:['Pending', 'In Progres', 'Completed'],
        default: 'Pending' 
    },
    
})
module.exports = mongoose.model('Todo', Todo)