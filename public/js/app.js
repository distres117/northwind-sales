require.config({
  paths: {
    'angular': '/bower_components/angular/angular.min'
  },
  shim:{
    angular:{
      exports: 'angular'
    }
  }
});

require(['angular', 'controller', 'apiFactory'], function(angular){
  angular.bootstrap(document, ['app.factories', 'app.controllers']);
});
