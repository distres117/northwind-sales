var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    regions: []//could this have been an array of strings
    
});

var model = mongoose.model('Employee', employeeSchema);

module.exports = model;
