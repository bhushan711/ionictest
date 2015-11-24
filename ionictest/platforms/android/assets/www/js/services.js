angular.module('starter.services', [])

.factory('myService', function ($http) {   //anguler ajax service 
    var promise;
    var myService = {
        async: function () {
            if (!promise) {
                // $http returns a promise, which has a then function, which also returns a promise
                promise = $http.get('http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo').then(function (response) {
                    // The then function here is an opportunity to modify the response
                    console.log(response);
                    // The return value gets picked up by the then in the controller.
                    return response.data;
                });
            }
            // Return the promise to the controller
            return promise;
        }
    };
    return myService;

})

.factory('city', function ($rootScope) { //Broadcast service 
  // Might use a resource here that returns a JSON array

  // Some fake testing data
 

    var property = '';

    return {
        getProperty: function () {
            return property;
        },
        setProperty: function(value) {
            property = value;
            $rootScope.$broadcast('handleBroadcast');
        },
       
  };
});
