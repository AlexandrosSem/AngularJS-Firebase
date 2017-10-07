/**
 * Created by Alexandros on 27/10/2014.
 */
/**
 * Created by Alexandros on 20/10/2014.
 */
/**
 * Created by Alexandros on 13/10/2014.
 */
'use strict';

app.factory('Users',
    function (FIREBASE_URL,$firebase) {

        var ref = new Firebase(FIREBASE_URL);


        var Users = {

            changeUserImage: function(userId){


                var imageURL = "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/1899925_10205311101484886_3009622299023285588_n.jpg?oh=64bcff55ed3ac26ca80b7baae9b26908&oe=54AB5045&__gda__=1423855310_d1cfd91cb3d858d2030140d6e79a09dc";

                ref.child("users/" + userId + "/md5_hash").set(imageURL);

                var posts    = $firebase(ref.child("posts")).$asArray();

                var comments = $firebase(ref.child("comments")).$asArray();

                posts.$loaded().then(function(){




                    for(var i = 0; i < posts.length; i++){

                        if(posts[i].username === userId){

                            ref.child("posts/" + posts[i].$id + "/userImage").set(imageURL);

                        }


                    }



                });


                comments.$loaded().then(function(){



                    for(var i = 0; i < comments.length; i++){

                        if(comments[i].username === userId){

                            ref.child("comments/" + comments[i].$id + "/userImage").set(imageURL);


                        }


                    }



                });

            }
            ,
            addCategory: function(category){



                ref.child("categories").push(JSON.parse('{"category"'  +  ':"' + category + '"}'));


            }
            ,
            retrieveUsers: function () {
                return $firebase(ref.child("users")).$asArray();
            }

        };


        return Users;
    });/**
 * Created by Alexandros on 9/10/2014.
 */
/**
 * Created by Alexandros on 10/10/2014.
 */
/**
 * Created by Alexandros on 14/10/2014.
 */
