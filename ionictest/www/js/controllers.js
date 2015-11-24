angular.module('starter.controllers', [])

.controller('DashCtrl', function ($state,city, myService, $scope) {   //dasboard page controller 
    myService.async().then(function(d) {
        $scope.data = d.geonames;
    });
    $scope.savecity=function(d)
    {
        city.setProperty(d);
        console.log(d);
        window.localStorage.setItem("city", d);
        $state.go('tab.chats');
    }
    })

.controller('CityCtrl', function ($scope, city) {     //city page controller 
    var local = window.localStorage.getItem("city");
    //var value = city.getProperty();
    //if (value == null || value == "") {
    //    $scope.citytest = local;
    //}
    //else {
    //    $scope.citytest = value;
    //}
    $scope.citytest = local;
    $scope.$on('handleBroadcast', function () {

        $scope.citytest = city.getProperty();
    });
})



.controller('AccountCtrl', function ($state,$scope) {   //ACCOUNT page controller
    $scope.homestate = function () {
        $state.go('tab.dash');
    }
});
