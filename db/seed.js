var Employee = require('./model'),
    db = require('./index');

var employees = [
    {name: 'Larry', regions: ['n', 's']},
    {name: 'Moe', regions: ['n', 's', 'w']},
    {name: 'Curly', regions: ['e','w']},
    {name: 'Shep', regions: ['n']}];

function seed(){
    return db().then(function(){
        return Employee.remove();
    })
    .then(function(){
        console.log('seeding...');
        return Employee.insertMany(employees);
    });

}

if (!process.env.TESTING){
    seed().then(function(){
        process.exit(0);
    });
}

module.exports = seed;
