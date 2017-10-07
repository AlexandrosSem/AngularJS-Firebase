/**
 * Created by Alexandros on 10/10/2014.
 */
'use strict';

app.controller('AccessDeniedCommentsCtrl', function ($scope,$rootScope,AccessDeniedComments) {



            $scope.searchByAccess = "denied";

            $scope.commentLimit = 10;

            $scope.comments = AccessDeniedComments.retrieveComments();




            $scope.comments.$loaded().then(function() {

                for(var i = 0; i < $scope.comments.length; i++){

                    $scope.comments[i].comment = decodeURIComponent($scope.comments[i].comment);


                }

                $scope.$watchCollection(
                    "comments",
                    function() {


                        for(var i = 0; i < $scope.comments.length; i++){

                            $scope.comments[i].comment = decodeURIComponent($scope.comments[i].comment);


                        }

                    }
                );


            });





            $scope.increaseLimit = function(){

                $scope.commentLimit = $scope.commentLimit + 10;

            };



            $scope.saveComment = function(comment){

                comment.access = "granted";

                comment.comment = encodeURIComponent(comment.comment);

                AccessDeniedComments.saveComment(comment);


            };


            $scope.deleteComment = function(commentId){

                AccessDeniedComments.deleteComment(commentId);

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
/**
 * Created by Alexandros on 20/10/2014.
 */
