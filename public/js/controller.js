define(['angular'], function(angular){
  angular.module('app.controllers', [])
  .controller('MainCtrl', function($scope, ApiFactory){

    $scope.regions = {'n': 'North', 's': 'South', 'e': 'East', 'w': 'West'};

    function getNew(){
      return {
        regions: {}
      };
    }
    function getAll(){
        ApiFactory.getAll().then(function(employees){
          console.log(employees);
          $scope.employees = employees;
        });
    }

    $scope.toggle = function(region){
      if (!$scope.newEmployee.regions[region])
        $scope.newEmployee.regions[region] = true;
      else
        delete $scope.newEmployee.regions[region];
    };

    $scope.addNew = function(){
      var name = $scope.newEmployee.name;
      var regions = Object.keys($scope.newEmployee.regions);
      ApiFactory.addEmployee($scope.newEmployee.name, regions ).then(function(){
        getAll();
      });
    };

    $scope.remove = function(id){
      ApiFactory.removeEmployee(id).then(function(){
        getAll();
      });
    };


    getAll();
    $scope.newEmployee = getNew();
  });
});
