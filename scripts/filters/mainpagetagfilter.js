'use strict';

app.filter('MainPageTagFilter', function () {
    return function (items) {

        var filtered = [];

        if(items !== undefined) {

            filtered = items.split(","); //split to tokens

            return filtered;

        }

    };
});/**
 * Created by Alexandros on 17/9/2014.
 *//**
 * Created by Alexandros on 18/9/2014.
 */
/**
 * Created by Alexandros on 13/10/2014.
 */
/**
 * Created by Alexandros on 19/10/2014.
 */
