'use strict';

app.controller('AuthCtrl',
    function ($scope, $location, $rootScope ,Auth, User) {


        $scope.draggableObjects = [
            {name: 'G'},
            {name: 'D'},
            {name: 'A'},
            {name: 'R'},
            {name: 'E'},
            {name: 'M'}
        ];



        if (Auth.signedIn()) {
            $location.path($rootScope.trackingURL);
        }

        $scope.$on('$firebaseSimpleLogin:login', function () {
            $location.path($rootScope.trackingURL);
        });

        $scope.login = function () {
            Auth.login($scope.user).then(function () {
                $location.path($rootScope.trackingURL);
            }, function (error) {
                $scope.error = error.toString();
            });
        };

        $scope.onDropComplete = function (index, obj, evt) {
            var otherObj = $scope.draggableObjects[index];
            var otherIndex = $scope.draggableObjects.indexOf(obj);
            $scope.draggableObjects[index] = obj;
            $scope.draggableObjects[otherIndex] = otherObj;

            var correctString = "";

            for(var i = 0; i < $scope.draggableObjects.length; i++){

                correctString = correctString + $scope.draggableObjects[i].name;


            }

            if(correctString === "DRAGME"){

                document.getElementById("dragDiv").style.background = "green";


            }
            else{

                document.getElementById("dragDiv").style.background = "red";

            }
        };

        $scope.register = function (usernameError) {

            var correctString = "";

            for(var i = 0; i < $scope.draggableObjects.length; i++){

                correctString = correctString + $scope.draggableObjects[i].name;


            }

            if(correctString === "DRAGME"){

                if(usernameError.taken == false && usernameError.invalid == false) { //an iparxei lathos sto username na min ginei register
                    Auth.register($scope.user).then(function (authUser) {
                        User.create(authUser, $scope.user.username).then(function () {
                            Auth.login($scope.user).then(function () {
                                $location.path($rootScope.trackingURL);
                            });
                        });
                    }, function (error) {
                        $scope.error = error.toString();
                    });

                }

            }
            else{

                alert("Δεν σχημάτισες την λέξη DRAGME");
                $location.path("/");


            }


        };
    });