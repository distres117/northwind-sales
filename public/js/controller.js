define(['angular'], function(angular){
  angular.module('app.controllers', [])
  .controller('MainCtrl', function($scope, ApiFactory){

    $scope.regions = {'n': 'North', 's': 'South', 'e': 'East', 'w': 'West'};

    function getNew(){
      $scope.newEmployee =  {
        regions: {
          n: false,
          s: false,
          e: false,
          w: false
        }
      };
    }
    function getAll(){
        ApiFactory.getAll().then(function(employees){
          $scope.employees = employees;
        });
    }
    $scope.isIn = function(employee, region){
      return employee.regions.indexOf(region) > -1;
    };

    $scope.getActiveRegions = function(){
      return Object.keys($scope.newEmployee.regions).filter(function(key){
        return $scope.newEmployee.regions[key];
      });
    };
    $scope.addNew = function(){
      var name = $scope.newEmployee.name;
      var regions =  $scope.getActiveRegions();
      ApiFactory.addEmployee($scope.newEmployee.name, regions ).then(function(){
        getNew();
        getAll();
      });
    };

    $scope.remove = function(id){
      ApiFactory.removeEmployee(id).then(function(){
        getAll();
      });
    };

    $scope.changeRegions = function(id, region){
      ApiFactory.setRegion(id, region).then(function(res){
        getAll();
      });
    };


    getAll();
    getNew();
  });
});
