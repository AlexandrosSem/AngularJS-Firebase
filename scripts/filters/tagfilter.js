'use strict';

app.filter('TagFilter', function () {
    return function (items) {

        var filtered = [];

        if(items !== undefined) {

            for (var i = 0; i < items.length; i++) {

                if (i == items.length - 1) {

                    filtered.push(items[i]);

                }
                else {
                    filtered.push(items[i] + ", ");
                }

            }

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
