/**
 * Created by Alexandros on 13/10/2014.
 */
'use strict';

app.factory('Main',
    function (FIREBASE_URL,$firebase) {

        var ref = new Firebase(FIREBASE_URL);

        var Main = {
            retrieveArticles: function () {
                return $firebase(ref.child("posts")).$asArray();
            }
            ,
            retrieveCategories: function () {
                return $firebase(ref.child("categories")).$asArray();
            }
            ,
            retrieveTags: function () {
                return $firebase(ref.child("tags")).$asArray();
            }
            ,
            retrieveCommentsFromAllPosts: function(){
                return $firebase(ref.child("comments")).$asArray();
            }
        };


        return Main;
    });/**
 * Created by Alexandros on 9/10/2014.
 */
/**
 * Created by Alexandros on 10/10/2014.
 */
/**
 * Created by Alexandros on 16/10/2014.
 */
