var expect = require('chai').expect,
    request = require('supertest-as-promised')(require('../app')),
    seed = require('../db/seed');

before(function(){
    return seed();
});

describe('Routes tests', function(){
    var newEmp;
   it('Gets all employees', function(){
       return request.get('/api').then(function(res){
          expect(res.body.length).to.equal(4);
       });
   });
   it("creates new employee", function(){
       return request.post('/api').send({name: 'Oliver'}).expect(200)
       .then(function(res){
           newEmp = res.body;
           expect(res.body.name).to.equal('Oliver');
       });
   });
   it('adds region to employee', function(){
      return request.put('/api/' + newEmp._id).send({region: 'N'})
      .then(function(res){
         expect(res.body.regions[0]).to.equal('N');
      });
   });
   it('removes region from employee', function(){
      return request.put('/api/'+ newEmp._id).send({region: 'N'})
      .then(function(res){
         expect(res.body.regions.length).to.equal(0);
      });
   });
   it('removes employee', function(){
       return request.delete('/api/' + newEmp._id).expect(204)
       .then(function(){
          return request.get('/api'); 
       })
       .then(function(res){
          expect(res.body.length).to.equal(4);
       });
   });
   it('test error handler', function(){
      return request.get('/api/willfail').expect(404);
   });
});
