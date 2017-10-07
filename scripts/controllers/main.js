'use strict';



  app.controller('MainCtrl', function ($scope,Main,$rootScope) {


      $scope.searchByAccess = "granted";
      $scope.searchByCategory = "";
      $scope.searchByTag = "";
      $scope.searchByUsername = "";
      $scope.categoryComparator = false;
      $scope.usernameComparator = false;
      $scope.articleLimit = 10;
      $scope.mainPageTitle = "Τελευταία άρθρα";



      $scope.posts = Main.retrieveArticles();


      $scope.categories = Main.retrieveCategories();

      $scope.tags  = Main.retrieveTags();

      $scope.comments = Main.retrieveCommentsFromAllPosts();



      $scope.increaseLimit = function(){

          $scope.articleLimit = $scope.articleLimit + 10;

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


      $scope.changeAll = function(){

          $rootScope.fields.searchBySearch = "";
          $scope.searchByCategory = "";
          $scope.searchByTag = "";
          $scope.searchByUsername = "";
          $scope.categoryComparator = false;
          $scope.usernameComparator = false;
          $scope.articleLimit = 10;
          $scope.mainPageTitle = "Τελευταία άρθρα";

      };

      $scope.changeCategory = function (category) {

          $rootScope.fields.searchBySearch = "";
          $scope.categoryComparator = true;
          $scope.usernameComparator = false;
          $scope.searchByTag = "";
          $scope.searchByUsername = "";
          $scope.searchByCategory = category;
          $scope.articleLimit = 10;
          $scope.mainPageTitle = "Όλα τα άρθρα της κατηγορίας '" + category + "'";

      };

      $scope.changeTag = function (tag) {

          $rootScope.fields.searchBySearch = "";
          $scope.categoryComparator = false;
          $scope.usernameComparator = false;
          $scope.searchByCategory = "";
          $scope.searchByUsername = "";
          $scope.searchByTag = tag;
          $scope.articleLimit = 10;
          $scope.mainPageTitle = "Όλα τα άρθρα που εμπεριέχουν την ετικέτα '" + tag + "'";

      };

      $scope.changeUsername = function(username){


          $rootScope.fields.searchBySearch = "";
          $scope.categoryComparator = false;
          $scope.usernameComparator = true;

          $scope.searchByCategory = "";
          $scope.searchByTag = "";
          $scope.searchByUsername = username;
          $scope.articleLimit = 10;
          $scope.mainPageTitle = "Όλα τα άρθρα του χρήστη '" + username + "'";



      }



  });
