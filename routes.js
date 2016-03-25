var router = require('express').Router(),
    Employee = require('./db/model');

router.route('/')
    .get(function(req,res,next){
        Employee.find().then(function(employees){
            res.json(employees);
        },next)
    })
    .post(function(req,res,next){
        Employee.create({name: req.body.name}).then(function(){
            res.sendStatus(200);
        }, next);
    });

module.exports = router;