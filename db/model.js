var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    regions: []
    
});

var model = mongoose.model('Employee', employeeSchema);

module.exports = model;