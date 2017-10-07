'use strict';


    app.controller('ContactCtrl', function ($scope,FIREBASE_URL,$location,$rootScope) {

        var ref = new Firebase(FIREBASE_URL);

        $scope.name = "";
        $scope.email = "";
        $scope.subject = "";
        $scope.message = "";
        $scope.username = "no login";
        $scope.userImage = "no image";



        $scope.draggableObjects = [
            {name: 'G'},
            {name: 'D'},
            {name: 'A'},
            {name: 'R'},
            {name: 'E'},
            {name: 'M'}
        ];

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



        $scope.sendEmail = function(){


            var correctString = "";

            for(var i = 0; i < $scope.draggableObjects.length; i++){

                correctString = correctString + $scope.draggableObjects[i].name;


            }


            if(correctString === "DRAGME"){

                if($rootScope.currentUser !== undefined){ //shmenei ekane login prin steilei minima

                    $scope.username  = $rootScope.currentUser.username;
                    $scope.userImage = $rootScope.currentUser.md5_hash;

                }

                //encoding

                $scope.name    = encodeURIComponent($scope.name);
                $scope.email   = encodeURIComponent($scope.email);
                $scope.subject = encodeURIComponent($scope.subject);
                $scope.message = encodeURIComponent($scope.message);

                //telos encoding

                ref.child("emails").push(JSON.parse('{"name"'  +  ':"' + $scope.name + '","email"' +  ':"' + $scope.email+ '","subject"' +  ':"' + $scope.subject+ '","message"' +  ':"' + $scope.message+ '","username"' +  ':"' + $scope.username+ '","userImage"' +  ':"' + $scope.userImage+ '","date"' +  ':' + new Date().getTime() +'}'));
                alert("Your message has been sent! I will reply you as soon as posible!");
                $location.path("/");

            }
            else{

                alert("Δεν σχημάτισες την λέξη DRAGME");
                $location.path("/");
            }


        }

    });
/**
 * Created by Alexandros on 8/10/2014.
 */
