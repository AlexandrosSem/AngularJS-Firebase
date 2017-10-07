'use strict';

app.filter('errorMessageFilter', function () {
    return function (str) {
        var filtered = "";

        if(str !== undefined){

            filtered = str.replace(' FirebaseSimpleLogin: ',' ');
            return filtered;
        }



    };
});/**
 * Created by Alexandros on 17/9/2014.
 *//**
 * Created by Alexandros on 18/9/2014.
 */
