/**
 * Created by Alexandros on 10/10/2014.
 */
'use strict';

app.controller('SinglePostCtrl', function ($scope,$rootScope,$routeParams,$location,SinglePost) {

      $scope.searchByAccess = "granted";
      $scope.comment = "";
      $scope.articleId = $routeParams.postId;
      $scope.commentLimit = 10;



      $scope.post = SinglePost.retrieveArticle($routeParams.postId);
      $scope.comments = SinglePost.retrieveComments();


      $scope.post.$loaded().then(function () {

          if($scope.post.category === undefined){

              $location.path("/");

          }
          else{

              if($scope.post.access === "denied"){

                  $location.path("/");

              }
              else{

                  $scope.post.text =  decodeURIComponent($scope.post.text);

                  document.getElementById("HTMLToDOM").innerHTML = $scope.post.text;


              }

          }


      });



    $scope.increaseLimit = function(){

        $scope.commentLimit = $scope.commentLimit + 10;

    };

      $scope.createComment = function(){

         var success = SinglePost.createComment($scope.comment,$rootScope.currentUser.username,new Date().getTime(),$routeParams.postId,$rootScope.currentUser.md5_hash);

          if(success){


              $scope.comment = "";
              alert("Το σχόλιο σας θα γίνει ορατό στην σελίδα αφού εγκριθεί από τον διαχειριστή!");

          }

      };

      $scope.viewDate = function(date){

          var d = new Date(date);

          var hours;
          var minutes;
          var seconds;
          var days;
          var months;


          if(d.getHours() < 10){

              hours = "0" + d.getHours();
          }
          else{

              hours = d.getHours();

          }

          if(d.getMinutes() < 10){

              minutes = "0" + d.getMinutes();
          }
          else{

              minutes = d.getMinutes();

          }

          if(d.getSeconds() < 10){

              seconds = "0" + d.getSeconds();
          }
          else{

              seconds = d.getSeconds();

          }

          if(d.getDate() < 10){

              days = "0" + d.getDate();
          }
          else{

              days = d.getDate();

          }

          if((d.getMonth() + 1) < 10){

              months = "0" + (d.getMonth() + 1);
          }
          else{

              months = (d.getMonth() + 1);

          }





          return hours + ":" + minutes + ":" + seconds + " " + days + "/" + months + "/" + d.getFullYear();

      };


});/**
 * Created by Alexandros on 13/10/2014.
 */
/**
 * Created by Alexandros on 14/10/2014.
 */
/**
 * Created by Alexandros on 19/10/2014.
 */
