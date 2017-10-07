/**
 * Created by Alexandros on 13/10/2014.
 */
'use strict';

app.factory('Accessdenied',
    function (FIREBASE_URL,$firebase) {

        var ref = new Firebase(FIREBASE_URL);

        var Accessdenied = {
            retrieveArticles: function () {
                return $firebase(ref.child("posts")).$asArray();
            }
        };


        return Accessdenied;
    });/**
 * Created by Alexandros on 9/10/2014.
 */
/**
 * Created by Alexandros on 10/10/2014.
 */
