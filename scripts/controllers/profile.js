'use strict';


app.controller('ProfileCtrl', function ($scope,Auth,Profile,$rootScope,$location) {


    if(!Auth.signedIn()) {

        $location.path("/");
    }
    else{

        $location.path("/profile/" + $rootScope.currentUser.username);

        $scope.imageURL = $rootScope.currentUser.md5_hash;

        $scope.user = Profile.retrieveProfile($rootScope.currentUser.username);

        $scope.saveImage = function () {

            if($scope.imageURL === encodeURI($scope.imageURL)){


                $rootScope.checkImage($scope.imageURL,
                    function(){

                        $rootScope.currentUser.md5_hash = $scope.imageURL;

                        Profile.saveImage($scope.user, $scope.imageURL);

                        $location.path("/");

                    },
                    function(){


                        $scope.imageURL = "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/1899925_10205311101484886_3009622299023285588_n.jpg?oh=64bcff55ed3ac26ca80b7baae9b26908&oe=54AB5045&__gda__=1421263310_4713fbb05e3ded0c67c01b6007073b71";

                        $rootScope.currentUser.md5_hash = $scope.imageURL;

                        Profile.saveImage($scope.user, $scope.imageURL);

                        $location.path("/");


                    });



            }
            else{

                alert("Το URL της εικόνας σας περιέχει λανθασμένους χαρακτήρες. Διορθώστε το!");


            }


        }

    }










});
/**
 * Created by Alexandros on 8/10/2014.
 */
/**
 * Created by Alexandros on 18/10/2014.
 */
