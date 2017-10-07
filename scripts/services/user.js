'use strict';

app.factory('User', function ($firebase, FIREBASE_URL, Auth, $rootScope) {
    var ref = new Firebase(FIREBASE_URL + 'users');

    var users = $firebase(ref);

    var User = {
        create: function (authUser, username) {
            var user = $firebase(ref.child(username)).$asObject();

            return user.$loaded(function () {
                user.username = username;
                user.md5_hash = "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/1899925_10205311101484886_3009622299023285588_n.jpg?oh=64bcff55ed3ac26ca80b7baae9b26908&oe=54AB5045&__gda__=1421263310_4713fbb05e3ded0c67c01b6007073b71";
                user.$priority = authUser.uid;
                user.$save();
            });
        },
        findByUsername: function (username) {
            if (username) {
                return $firebase(ref.child(username)).$asObject();
            }
        },
        signedIn: function () {
            return $rootScope.currentUser !== undefined;
        },
        getCurrent: function () {
            return $rootScope.currentUser;
        }
    };

    $rootScope.$on('$firebaseSimpleLogin:login', function (e, authUser) {
        var query = $firebase(ref.startAt(authUser.uid).endAt(authUser.uid)).$asArray();





        query.$loaded(function () {
            setCurrentUser(query[0].username);
        });
    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function() {
        delete $rootScope.currentUser;
    });

    function setCurrentUser (username) {
        $rootScope.currentUser = User.findByUsername(username);
    }

    return User;
});/**
 * Created by Alexandros on 18/9/2014.
 */
