/**
 * Created by Alexandros on 13/10/2014.
 */
'use strict';

app.factory('Profile',
    function (FIREBASE_URL,$firebase) {

        var ref = new Firebase(FIREBASE_URL);

        var Profile = {
            retrieveProfile: function (username) {
                return $firebase(ref.child("users/" + username)).$asObject();
            }
            ,
            saveImage: function (user,imageURL){

                user.md5_hash = imageURL;
                user.$save();


                var posts    = $firebase(ref.child("posts")).$asArray();
                var comments = $firebase(ref.child("comments")).$asArray();


                posts.$loaded().then(function(){




                        for(var i = 0; i < posts.length; i++){

                            if(posts[i].username === user.username){

                                ref.child("posts/" + posts[i].$id + "/userImage").set(imageURL);

                            }


                        }



                });



                comments.$loaded().then(function(){



                    for(var i = 0; i < comments.length; i++){

                        if(comments[i].username === user.username){

                            ref.child("comments/" + comments[i].$id + "/userImage").set(imageURL);


                        }


                    }



                });



            }
        };


        return Profile;
    });/**
 * Created by Alexandros on 9/10/2014.
 */
/**
 * Created by Alexandros on 10/10/2014.
 */
/**
 * Created by Alexandros on 16/10/2014.
 */
/**
 * Created by Alexandros on 18/10/2014.
 */
