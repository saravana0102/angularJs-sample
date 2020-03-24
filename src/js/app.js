var app = angular.module('DemoApp',['ngRoute']);

app.config(function ($routeProvider) {
             
    $routeProvider.when('/', {
        templateUrl: './views/demo.html',
        controller: 'DemoController'
    }).otherwise({
        redirectTo: "/"
    });
});
