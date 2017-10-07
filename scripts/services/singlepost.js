/**
 * Created by Alexandros on 13/10/2014.
 */
'use strict';

app.factory('SinglePost',
    function (FIREBASE_URL,$firebase) {

        var ref = new Firebase(FIREBASE_URL);



        var SinglePost = {
            retrieveArticle: function (postId) {
                return $firebase(ref.child("posts/" + postId)).$asObject();
            }
            ,
            retrieveComments: function(){
                return $firebase(ref.child("comments")).$asArray();
            }
            ,
            createComment: function(comment,username,date,postId,userImage){

                comment = encodeURIComponent(comment);


                ref.child("comments").push(JSON.parse('{"comment"'  +  ':"' + comment.toString() + '","userImage"' +  ':"' + userImage+ '","username"' +  ':"' + username+ '","date"' +  ':' + date + ',"postId"' +  ':"' + postId+ '","access"' +  ':"denied"}'));

                return true;

            }

        };


        return SinglePost;
    });/**
 * Created by Alexandros on 9/10/2014.
 */
/**
 * Created by Alexandros on 10/10/2014.
 */
/**
 * Created by Alexandros on 14/10/2014.
 */
/**
 * Created by Alexandros on 19/10/2014.
 */
