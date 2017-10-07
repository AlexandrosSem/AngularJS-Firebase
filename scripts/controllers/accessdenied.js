/**
 * Created by Alexandros on 10/10/2014.
 */
'use strict';

app.controller('AccessdeniedCtrl', function ($scope,$rootScope,Accessdenied) {




            $scope.searchByAccess = "denied";

            $scope.articleLimit = 10;

            $scope.posts = Accessdenied.retrieveArticles();


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

            }















});/**
 * Created by Alexandros on 13/10/2014.
 */
