/**
 * Created by Alexandros on 10/10/2014.
 */
'use strict';

app.controller('UsersCtrl', function ($scope,$rootScope,Users) {


    $scope.categoryToBeAdded = "";
    $scope.searchUser = "";
    $scope.userLimit = 10;

    $scope.users = Users.retrieveUsers();


    $scope.increaseLimit = function(){

        $scope.userLimit = $scope.userLimit + 10;

    };

    $scope.addCategory = function(){

        Users.addCategory($scope.categoryToBeAdded);
        $scope.categoryToBeAdded = "";

    };


    $scope.changeUserImage = function(userId){

        Users.changeUserImage(userId);

    };



});/**
 * Created by Alexandros on 13/10/2014.
 */
/**
 * Created by Alexandros on 14/10/2014.
 */
/**
 * Created by Alexandros on 20/10/2014.
 */
/**
 * Created by Alexandros on 27/10/2014.
 */
