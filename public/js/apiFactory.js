define(['angular'], function(angular){
  angular.module('app.factories',[])
  .factory('ApiFactory', function($http){

    function getAll(){
      return $http.get('/api').then(function(res){
        return res.data;//here is where I ended up mapping my results so that I created client side objects which methods-- employee.fullSchedule(), employee.notWorking().. employee.canDelete().. etc
      });
    }

    function setRegion(id, region){
      return $http.put('/api/'+ id, {region: region});
    }

    function addEmployee(name, regions){
      return $http.post('/api', {name: name, regions: regions});
    }

    function removeEmployee(id){
      return $http.delete('/api/' + id);
    }
    return {
      getAll : getAll,
      setRegion : setRegion,
      addEmployee : addEmployee,
      removeEmployee : removeEmployee
    };
  });
});
