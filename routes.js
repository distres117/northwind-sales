var router = require('express').Router(),
    Employee = require('./db/model');

router.param('id', function(req,res,next,id){
   Employee.findById(id).then(function(employee){
      req.employee = employee;
      next();
   },next); 
});

router.route('/')
    .get(function(req,res,next){
        Employee.find().then(function(employees){
            res.json(employees);
        },next);
    })
    .post(function(req,res,next){
        Employee.create({name: req.body.name}).then(function(emp){
            res.json(emp);
        }, next);
    });

router.route('/:id')
    .put(function(req,res,next){
        var region = req.body.region;
        if (req.query.remove)
            req.employee.regions.remove(region);
        else
            req.employee.regions.push(region);
        req.employee.save().then(function(emp){
            res.json(emp);
        }, next);
    })
    .delete(function(req,res,next){
        req.employee.remove().then(function(){
           res.sendStatus(204); 
        }, next);
    });

module.exports = router;