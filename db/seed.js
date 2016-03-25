var Employee = require('./model'),
    db = require('./index');

var employees = [
    {name: 'Larry', regions: ['N', 'S']},
    {name: 'Moe', regions: ['N', 'S', 'W']},
    {name: 'Curly', regions: ['E','W']},
    {name: 'Shep', regions: ['S']}];
    
function seed(){
    return db().then(function(){
        return Employee.remove();
    })
    .then(function(){
        console.log('seeding...');
        return Employee.insertMany(employees)
    })
    
}

if (!process.env.TESTING){
    seed().then(function(){
        process.exit(0);
    })
}

module.exports = seed;