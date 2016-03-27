define(['angular'], function(angular){
  angular.module('app.factories',[])
  .factory('ApiFactory', function($http){

    function getAll(){
      return $http.get('/api').then(function(res){
        return res.data;
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
