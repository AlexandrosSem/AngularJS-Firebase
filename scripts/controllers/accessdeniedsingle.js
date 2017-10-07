/**
 * Created by Alexandros on 10/10/2014.
 */
'use strict';

app.controller('AccessDeniedSingleCtrl', function ($scope,$rootScope,$routeParams,AccessDeniedSingle) {


    function mousemove() {

        var current = CKEDITOR.instances.textArticle.getData();

        if (previousEditorData !== current) {

            $scope.$apply(function () {
                $scope.post.text = current;

                document.getElementById("HTMLToDOM").innerHTML = $scope.post.text;

            });

            previousEditorData = current;

        }

    }






            $scope.categories = [];
            $scope.tags = [];
            $scope.addedTags = "";
            $scope.tagsList = [];

            var previousEditorData = "";
            var tagInPostExistInlist;



            $scope.categories = AccessDeniedSingle.allCategories();


            $scope.categories.$loaded().then(function () {

                $scope.tags = AccessDeniedSingle.allTags();

                $scope.tags.$loaded().then(function () {

                    for(var i = 0; i < $scope.tags.length; i++){

                        var stringObj = '{"tag"' + ':"' + $scope.tags[i].tag + '"}';
                        var obj = JSON.parse(stringObj);
                        $scope.tagsList.push(obj);




                    }


                    $scope.post = AccessDeniedSingle.retrieveArticle($routeParams.postId);

                    $scope.post.$loaded().then(function () {


                        //decoding fields

                        $scope.post.title  = decodeURIComponent($scope.post.title);
                        $scope.post.firstText = decodeURIComponent($scope.post.firstText);
                        $scope.post.text  = decodeURIComponent($scope.post.text);

                        //telos decoding


                        $scope.viewDate = function(){

                            var d = new Date($scope.post.date);

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



                        var tagsTable = [];
                        var tokens = $scope.post.tag.split(","); //split to tokens

                        for (var i = 0; i < tokens.length; i++) {

                            tagInPostExistInlist = false;

                            tagsTable.push(tokens[i]);



                            for (var k = 0; k < $scope.tagsList.length; k++) {

                                if (tokens[i] === $scope.tagsList[k].tag) {

                                    tagInPostExistInlist = true;
                                    break;

                                }

                            }

                            if (tagInPostExistInlist == false) {

                                var stringObj = '{"tag"' + ':"' + tokens[i] + '"}';
                                var obj = JSON.parse(stringObj);
                                $scope.tagsList.push(obj);



                            }
                        }


                        $scope.$apply(function () {

                                $scope.tagsList = $scope.tagsList;

                         });


                        $scope.tagsInPost = tagsTable;





                        CKEDITOR.replace('textArticle');
                        CKEDITOR.instances.textArticle.setData($scope.post.text);


                        window.onmousemove = mousemove;


                    });

                });

            });


            $scope.addTags = function () {


                var success = AccessDeniedSingle.addTags($scope.addedTags, $scope.tagsList);


                if (success) {

                    $scope.addedTags = "";

                }

            };


            $scope.saveArticle = function () {

                if($scope.post.imageURL === encodeURI($scope.post.imageURL)){


                    $rootScope.checkImage($scope.post.imageURL,
                        function(){

                            //diorthoseis gia to problhma parse

                            $scope.post.title = encodeURIComponent($scope.post.title);
                            $scope.post.firstText = encodeURIComponent($scope.post.firstText);
                            $scope.post.text = encodeURIComponent($scope.post.text);



                            //telos

                            $scope.post.access = "granted";

                            $scope.post.tag = "";

                            for(var i = 0; i < $scope.tagsInPost.length; i++){

                                $scope.post.tag = $scope.post.tag + $scope.tagsInPost[i] + ",";


                            }

                            //afairoume to teleutaio

                            $scope.post.tag = $scope.post.tag.substring(0, $scope.post.tag.length - 1);

                            $scope.post.tag = $scope.post.tag.toString();


                            AccessDeniedSingle.saveArticle($scope.post,$scope.tagsInPost,$scope.tags);

                        },
                        function(){

                            $scope.post.imageURL = "https://scontent-a-ams.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1904260_10205311364811469_5343555384477499593_n.jpg?oh=442210aaf610fecd026fff41c36118c0&oe=54F2A580";

                            //diorthoseis gia to problhma parse

                            $scope.post.title = encodeURIComponent($scope.post.title);
                            $scope.post.firstText = encodeURIComponent($scope.post.firstText);
                            $scope.post.text = encodeURIComponent($scope.post.text);



                            //telos

                            $scope.post.access = "granted";

                            $scope.post.tag = "";

                            for(var i = 0; i < $scope.tagsInPost.length; i++){

                                $scope.post.tag = $scope.post.tag + $scope.tagsInPost[i] + ",";


                            }

                            //afairoume to teleutaio

                            $scope.post.tag = $scope.post.tag.substring(0, $scope.post.tag.length - 1);

                            $scope.post.tag = $scope.post.tag.toString();


                            AccessDeniedSingle.saveArticle($scope.post,$scope.tagsInPost,$scope.tags);


                        });




                }
                else{

                    alert("Το URL της εικόνας για το άρθρο σας περιέχει λανθασμένους χαρακτήρες. Διορθώστε το!");


                }




            };


            $scope.deleteArticle = function () {

                AccessDeniedSingle.deleteArticle($routeParams.postId);


            };





});/**
 * Created by Alexandros on 13/10/2014.
 */
/**
 * Created by Alexandros on 14/10/2014.
 */
