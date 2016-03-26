define(['angular'], function(angular){
  angular.module('app.factories',[])
  .factory('ApiFactory', function($http){

    function getAll(){
      return $http.get('/api').then(function(res){
        return res.data;
      });
    }

    function addRegion(id, region){
      return $http.put('/api/'+ id, {region: region}).then(function(res){
        return res.data;
      });
    }

    function removeRegion(id, region){
      return $http.put('/api/'+ id + '?remove=true', {region: region}).then(function(res){
        return res.data;
      });
    }

    function addEmployee(name, regions){
      return $http.post('/api', {name: name, regions: regions});
    }

    function removeEmployee(id){
      return $http.delete('/api/' + id);
    }
    return {
      getAll : getAll,
      addRegion : addRegion,
      removeRegion : removeRegion,
      addEmployee : addEmployee,
      removeEmployee : removeEmployee
    };
  });
});
