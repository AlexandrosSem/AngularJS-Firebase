/**
 * Created by Alexandros on 10/10/2014.
 */
'use strict';

app.controller('CreatepostCtrl', function ($scope,$rootScope,$location,Auth,Createpost) {


    function mousemove () {

        var current = CKEDITOR.instances.textArticle.getData();

        if(previousEditorData !== current){

            $scope.$apply(function() {


                $scope.text = current;

                document.getElementById("HTMLToDOM").innerHTML = $scope.text;

            });

            previousEditorData = current;

        }

    }




        $scope.categories = [];
        $scope.tags = [];
        $scope.tagsList = [];
        $scope.tag = "";
        $scope.category = "";
        $scope.addedTags = "";
        $scope.title = "";
        $scope.firstText = "";
        $scope.text = "";
        $scope.generatedDate = new Date().getTime();
        $scope.imageURL = "https://scontent-a-ams.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1904260_10205311364811469_5343555384477499593_n.jpg?oh=442210aaf610fecd026fff41c36118c0&oe=54F2A580";


        var previousEditorData = "";
        $scope.categories  = Createpost.allCategories();

        $scope.categories.$loaded().then(function() {

            $scope.tags = Createpost.allTags();

            $scope.tags.$loaded().then(function() {

                for(var i = 0; i < $scope.tags.length; i++){

                    var stringObj = '{"tag"' + ':"' + $scope.tags[i].tag + '"}';
                    var obj = JSON.parse(stringObj);
                    $scope.tagsList.push(obj);


                }

                CKEDITOR.replace('textArticle');
                CKEDITOR.instances.textArticle.setData($scope.text);
                window.onmousemove = mousemove;


            });


        });


       $scope.viewDate = function(){

           var d = new Date($scope.generatedDate);

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



        $scope.addTags = function(){


           var success = Createpost.addTags($scope.addedTags,$scope.tagsList);


           if(success){

               $scope.addedTags = "";

           }

        };

       $scope.createArticle = function(){

            var success = Createpost.createArticle($scope.category,$scope.tag,$scope.title,$scope.firstText,$scope.text,$scope.generatedDate,$scope.imageURL,$rootScope.currentUser.username,$rootScope.currentUser.md5_hash);

           if(success){

               alert("Το άρθρο σας θα γίνει ορατό στην σελίδα αφού εγκριθεί από τον διαχειριστή!");
               $location.path("/");

           }
           else{

               alert("Το URL της εικόνας για το άρθρο σας περιέχει λανθασμένους χαρακτήρες. Διορθώστε το!");

           }

       }


});