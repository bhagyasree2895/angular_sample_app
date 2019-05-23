/*angular.module("myApp", [])
      .controller("myFirstController",['$scope', function ($scope){
          console.log("This is form controller");
          $scope.hello="hello world";
      }]);*/

      angular.module("myApp").controller("myFirstController", function ($scope)
      {
          let Student= {
              FirstName: "Bhagya Sree",
              LastName : "Chanda",
              StudentId : "S534662@nwmisouri.edu"
          }
          $scope.Student=Student;
          
      });
      let mycontroller=function($scope){
        $scope.message="Hello World";
    }