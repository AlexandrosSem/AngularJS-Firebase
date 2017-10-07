/**
 * Created by Alexandros on 13/10/2014.
 */
'use strict';

app.factory('AccessDeniedComments',
    function (FIREBASE_URL,$firebase) {

        var ref = new Firebase(FIREBASE_URL);

        var AccessDeniedComments = {
            retrieveComments: function () {
                return $firebase(ref.child("comments")).$asArray();
            }
            ,
            deleteComment: function(commentId){

                $firebase(ref.child("comments")).$remove(commentId);

            }
            ,
            saveComment: function(comment){

                var foundComment = $firebase(ref.child("comments/" + comment.$id)).$asObject();

                foundComment.$loaded().then(function() {

                    foundComment.comment = comment.comment;
                    foundComment.access = comment.access;

                    foundComment.$save();

                    ref.child("posts/" + comment.postId + "/comments_number").once('value', function(snap) {

                        var comments_number = snap.val();

                        comments_number = comments_number + 1; //aukshsh kata 1

                        ref.child("posts/" + comment.postId + "/comments_number").set(comments_number);


                    });


                });




            }
        };


        return AccessDeniedComments;
    });/**
 * Created by Alexandros on 9/10/2014.
 */
/**
 * Created by Alexandros on 10/10/2014.
 */
/**
 * Created by Alexandros on 20/10/2014.
 */
