'use strict';

app.controller('NavCtrl', function ($scope,$sce,Auth,$location,$rootScope,FIREBASE_URL) {



    if($location.path() === "/profile") {

        $location.path("/");
    }




    $scope.logout = function () {
        Auth.logout();
    };

    $rootScope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };

    $rootScope.fields = {
        searchBySearch: ""
    };


    $rootScope.fbLikeURL  = "";


    $rootScope.decodeElement = function(element){

        return decodeURIComponent(element);

    };

    $rootScope.checkImage = function(src,good,bad){
        var img     = new Image();
        img.onload  = good;
        img.onerror = bad;
        img.src     = src;
    };


    $scope.path = $location.path();
    $rootScope.trackingURL = "/";

    if($location.path() !== "/login" && $location.path() !== "/register"){ //an den einai oute login oute register tote kane tracking

        $rootScope.trackingURL = $location.path();

    }






    if($location.path() === "/"){


        document.getElementById("about").className = "";
        document.getElementById("contact").className = "";
        document.getElementById("createpost").className = "";
        document.getElementById("register").className = "";
        document.getElementById("login").className = "";
        document.getElementById("profile").className = "";
        document.getElementById("home").className = "active";
        document.getElementById("policy").className = "";
        document.getElementById("titleOfThePage").innerHTML= "Home";
        document.getElementById("fbImageURL").href = "https://scontent-a-vie.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/10421995_10205309397682292_547876142608278662_n.jpg?oh=402e127d4bc1f2d71f8420889046d967&oe=54F84FE9";



        $rootScope.fbLikeURL = "//www.facebook.com/plugins/like.php?href=https%3A%2F%2Falexandros.firebaseapp.com%2F%23%2F&amp;width&amp;layout=standard&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=80";




    }
    else if($location.path() === "/about"){

        document.getElementById("about").className = "active";
        document.getElementById("contact").className = "";
        document.getElementById("createpost").className = "";
        document.getElementById("register").className = "";
        document.getElementById("login").className = "";
        document.getElementById("profile").className = "";
        document.getElementById("home").className = "";
        document.getElementById("policy").className = "";
        document.getElementById("titleOfThePage").innerHTML= "About Me";
        document.getElementById("fbImageURL").href = "";


    }
    else if($location.path() === "/contact"){

        document.getElementById("about").className = "";
        document.getElementById("contact").className = "active";
        document.getElementById("createpost").className = "";
        document.getElementById("register").className = "";
        document.getElementById("login").className = "";
        document.getElementById("profile").className = "";
        document.getElementById("home").className = "";
        document.getElementById("policy").className = "";
        document.getElementById("titleOfThePage").innerHTML= "Contact Me";
        document.getElementById("fbImageURL").href = "";


    }
    else if($location.path() === "/createpost"){

        document.getElementById("about").className = "";
        document.getElementById("contact").className = "";
        document.getElementById("createpost").className = "active";
        document.getElementById("register").className = "";
        document.getElementById("login").className = "";
        document.getElementById("profile").className = "";
        document.getElementById("home").className = "";
        document.getElementById("policy").className = "";
        document.getElementById("titleOfThePage").innerHTML= "Create Article";
        document.getElementById("fbImageURL").href = "";

    }
    else if($location.path() === "/register"){

        document.getElementById("about").className = "";
        document.getElementById("contact").className = "";
        document.getElementById("createpost").className = "";
        document.getElementById("register").className = "active";
        document.getElementById("login").className = "";
        document.getElementById("profile").className = "";
        document.getElementById("home").className = "";
        document.getElementById("policy").className = "";
        document.getElementById("titleOfThePage").innerHTML= "Register";
        document.getElementById("fbImageURL").href = "";


    }
    else if($location.path() === "/login"){

        document.getElementById("about").className = "";
        document.getElementById("contact").className = "";
        document.getElementById("createpost").className = "";
        document.getElementById("register").className = "";
        document.getElementById("login").className = "active";
        document.getElementById("profile").className = "";
        document.getElementById("home").className = "";
        document.getElementById("policy").className = "";
        document.getElementById("titleOfThePage").innerHTML= "Login";
        document.getElementById("fbImageURL").href = "";


    }
    else if($location.path() === "/policy"){

        document.getElementById("about").className = "";
        document.getElementById("contact").className = "";
        document.getElementById("createpost").className = "";
        document.getElementById("register").className = "";
        document.getElementById("login").className = "";
        document.getElementById("profile").className = "";
        document.getElementById("home").className = "";
        document.getElementById("policy").className = "active";
        document.getElementById("titleOfThePage").innerHTML= "Policy";
        document.getElementById("fbImageURL").href = "";


    }
    else if($location.path().indexOf("/profile/") > -1){

        document.getElementById("about").className = "";
        document.getElementById("contact").className = "";
        document.getElementById("createpost").className = "";
        document.getElementById("register").className = "";
        document.getElementById("login").className = "";
        document.getElementById("profile").className = "active";
        document.getElementById("home").className = "";
        document.getElementById("policy").className = "";
        document.getElementById("titleOfThePage").innerHTML= $rootScope.currentUser.username;
        document.getElementById("fbImageURL").href = "";



    }
    else{

        document.getElementById("about").className = "";
        document.getElementById("contact").className = "";
        document.getElementById("createpost").className = "";
        document.getElementById("register").className = "";
        document.getElementById("login").className = "";
        document.getElementById("profile").className = "";
        document.getElementById("home").className = "";
        document.getElementById("policy").className = "";
        document.getElementById("fbImageURL").href = "";

        if($location.path().length < 27){

            var postId = $location.path().replace("/", "");

            var dataRefTitle = new Firebase(FIREBASE_URL).child("posts/" + postId + "/title");

            dataRefTitle.once('value', function(data) {

                document.getElementById("titleOfThePage").innerHTML = decodeURIComponent(data.val());

                var dataRefImage = new Firebase(FIREBASE_URL).child("posts/" + postId + "/imageURL");

                dataRefImage.once('value', function(data) {

                    document.getElementById("fbImageURL").href  = encodeURIComponent(data.val());

                    //url gia to facebook button

                    var fbLikeUrlPart1 = "//www.facebook.com/plugins/like.php?href=";
                    var fbLikeUrlPart2 = "https%3A%2F%2Falexandros.firebaseapp.com%2F%23%2F" + encodeURIComponent(postId);
                    var fbLikeUrlPart3 = "&amp;width&amp;layout=standard&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=80";

                    $rootScope.fbLikeURL = fbLikeUrlPart1 + fbLikeUrlPart2 + fbLikeUrlPart3;

                    //telos url gia to facebook button

                });




            });




        }

    }


    $scope.$on('$locationChangeStart', function() {




        if($location.path() === "/profile") {

            $location.path("/");
        }

        $scope.path = $location.path();

        if($location.path() !== "/login" && $location.path() !== "/register"){ //an den einai oute login oute register tote kane tracking

            $rootScope.trackingURL = $location.path();

        }


        if($location.path() === "/"){


            document.getElementById("about").className = "";
            document.getElementById("contact").className = "";
            document.getElementById("createpost").className = "";
            document.getElementById("register").className = "";
            document.getElementById("login").className = "";
            document.getElementById("profile").className = "";
            document.getElementById("home").className = "active";
            document.getElementById("policy").className = "";
            document.getElementById("titleOfThePage").innerHTML= "Home";
            document.getElementById("fbImageURL").href = "https://scontent-a-vie.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/10421995_10205309397682292_547876142608278662_n.jpg?oh=402e127d4bc1f2d71f8420889046d967&oe=54F84FE9";



            $rootScope.fbLikeURL = "//www.facebook.com/plugins/like.php?href=https%3A%2F%2Falexandros.firebaseapp.com%2F%23%2F&amp;width&amp;layout=standard&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=80";




        }
        else if($location.path() === "/about"){

            document.getElementById("about").className = "active";
            document.getElementById("contact").className = "";
            document.getElementById("createpost").className = "";
            document.getElementById("register").className = "";
            document.getElementById("login").className = "";
            document.getElementById("profile").className = "";
            document.getElementById("home").className = "";
            document.getElementById("policy").className = "";
            document.getElementById("titleOfThePage").innerHTML= "About Me";
            document.getElementById("fbImageURL").href = "";


        }
        else if($location.path() === "/contact"){

            document.getElementById("about").className = "";
            document.getElementById("contact").className = "active";
            document.getElementById("createpost").className = "";
            document.getElementById("register").className = "";
            document.getElementById("login").className = "";
            document.getElementById("profile").className = "";
            document.getElementById("home").className = "";
            document.getElementById("policy").className = "";
            document.getElementById("titleOfThePage").innerHTML= "Contact Me";
            document.getElementById("fbImageURL").href = "";


        }
        else if($location.path() === "/createpost"){

            document.getElementById("about").className = "";
            document.getElementById("contact").className = "";
            document.getElementById("createpost").className = "active";
            document.getElementById("register").className = "";
            document.getElementById("login").className = "";
            document.getElementById("profile").className = "";
            document.getElementById("home").className = "";
            document.getElementById("policy").className = "";
            document.getElementById("titleOfThePage").innerHTML= "Create Article";
            document.getElementById("fbImageURL").href = "";

        }
        else if($location.path() === "/register"){

            document.getElementById("about").className = "";
            document.getElementById("contact").className = "";
            document.getElementById("createpost").className = "";
            document.getElementById("register").className = "active";
            document.getElementById("login").className = "";
            document.getElementById("profile").className = "";
            document.getElementById("home").className = "";
            document.getElementById("policy").className = "";
            document.getElementById("titleOfThePage").innerHTML= "Register";
            document.getElementById("fbImageURL").href = "";


        }
        else if($location.path() === "/login"){

            document.getElementById("about").className = "";
            document.getElementById("contact").className = "";
            document.getElementById("createpost").className = "";
            document.getElementById("register").className = "";
            document.getElementById("login").className = "active";
            document.getElementById("profile").className = "";
            document.getElementById("home").className = "";
            document.getElementById("policy").className = "";
            document.getElementById("titleOfThePage").innerHTML= "Login";
            document.getElementById("fbImageURL").href = "";


        }
        else if($location.path() === "/policy"){

            document.getElementById("about").className = "";
            document.getElementById("contact").className = "";
            document.getElementById("createpost").className = "";
            document.getElementById("register").className = "";
            document.getElementById("login").className = "";
            document.getElementById("profile").className = "";
            document.getElementById("home").className = "";
            document.getElementById("policy").className = "active";
            document.getElementById("titleOfThePage").innerHTML= "Policy";
            document.getElementById("fbImageURL").href = "";


        }
        else if($location.path().indexOf("/profile/") > -1){

            document.getElementById("about").className = "";
            document.getElementById("contact").className = "";
            document.getElementById("createpost").className = "";
            document.getElementById("register").className = "";
            document.getElementById("login").className = "";
            document.getElementById("profile").className = "active";
            document.getElementById("home").className = "";
            document.getElementById("policy").className = "";
            document.getElementById("titleOfThePage").innerHTML= $rootScope.currentUser.username;
            document.getElementById("fbImageURL").href = "";



        }
        else{

            document.getElementById("about").className = "";
            document.getElementById("contact").className = "";
            document.getElementById("createpost").className = "";
            document.getElementById("register").className = "";
            document.getElementById("login").className = "";
            document.getElementById("profile").className = "";
            document.getElementById("home").className = "";
            document.getElementById("policy").className = "";
            document.getElementById("fbImageURL").href = "";

            if($location.path().length < 27){

                var postId = $location.path().replace("/", "");

                var dataRefTitle = new Firebase(FIREBASE_URL).child("posts/" + postId + "/title");

                dataRefTitle.once('value', function(data) {

                    document.getElementById("titleOfThePage").innerHTML = decodeURIComponent(data.val());

                    var dataRefImage = new Firebase(FIREBASE_URL).child("posts/" + postId + "/imageURL");

                    dataRefImage.once('value', function(data) {

                        document.getElementById("fbImageURL").href  = encodeURIComponent(data.val());

                        //url gia to facebook button

                        var fbLikeUrlPart1 = "//www.facebook.com/plugins/like.php?href=";
                        var fbLikeUrlPart2 = "https%3A%2F%2Falexandros.firebaseapp.com%2F%23%2F" + encodeURIComponent(postId);
                        var fbLikeUrlPart3 = "&amp;width&amp;layout=standard&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=80";

                        $rootScope.fbLikeURL = fbLikeUrlPart1 + fbLikeUrlPart2 + fbLikeUrlPart3;

                        //telos url gia to facebook button

                    });




                });




            }

        }
    });

});/**
 * Created by Alexandros on 9/10/2014.
 */
