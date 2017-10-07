/**
 * Created by Alexandros on 20/10/2014.
 */
/**
 * Created by Alexandros on 13/10/2014.
 */
'use strict';

app.factory('Email',
    function (FIREBASE_URL,$firebase) {

        var ref = new Firebase(FIREBASE_URL);



        var Email = {
            deleteEmail: function(emailId){

                $firebase(ref.child("emails")).$remove(emailId);

            }
            ,
            retrieveEmails: function () {
                return $firebase(ref.child("emails")).$asArray();
            }

        };


        return Email;
    });/**
 * Created by Alexandros on 9/10/2014.
 */
/**
 * Created by Alexandros on 10/10/2014.
 */
/**
 * Created by Alexandros on 14/10/2014.
 */
