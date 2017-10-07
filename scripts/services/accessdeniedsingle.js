/**
 * Created by Alexandros on 13/10/2014.
 */
'use strict';

app.factory('AccessDeniedSingle',
    function (FIREBASE_URL,$firebase,$location) {

        var ref = new Firebase(FIREBASE_URL);



        var AccessDeniedSingle = {
            deleteArticle: function(postId){

                $firebase(ref.child("posts")).$remove(postId);
                $location.path('/posts/access/tonpoulo/denied');

            }
            ,
            saveArticle : function(post,tagsInPost,tags){

                post.$save();


                var tagInDatabaseExist;

                for (var i = 0; i < tagsInPost.length; i++) {

                    tagInDatabaseExist = false;

                    for(var j = 0; j < tags.length; j++){

                        if(tagsInPost[i] === tags[j].tag){

                            tagInDatabaseExist = true;
                            break;

                        }

                    }

                    if(tagInDatabaseExist == false){

                        var stringObj = '{"tag"'  +  ':"' + tagsInPost[i] + '"}';
                        var obj = JSON.parse(stringObj);
                        ref.child("tags").push(obj);

                    }


                }



                $location.path('/posts/access/tonpoulo/denied');

            }
            ,
            retrieveArticle: function (postId) {
                return $firebase(ref.child("posts/" + postId)).$asObject();
            }
            ,
            allCategories: function () {
                return $firebase(ref.child("categories")).$asArray();
            }
            ,
            allTags: function () {
                return $firebase(ref.child("tags")).$asArray();
            }
            ,
            addTags: function(addedTags,allTags){

                var charAccepted = /^[A-ZΑ-Ω0-9,_]+$/;
                if(addedTags.match(charAccepted)){

                    var res = addedTags.split(","); //split to tokens


                    for(var j = 0; j < res.length; j++){

                        if(res[j].length == 1){ //elegxoi gia kathe etiketa
                            if(res[j] === "_"){

                                alert("Τουλάχιστον μία ετικέτα περιέχει μόνο τον χαρακτήρα _");
                                return false;

                            }

                        }
                        else if(res[j].length == 0){

                            alert("Τουλάχιστον μία ετικέτα είναι εντελώς κενή");
                            return false;

                        }
                        else if(res[j][res[j].length - 1] === "_"){

                            alert("Τουλάχιστον μία ετικέτα  περιέχει τον χαρακτήρα _ στο τέλος της");
                            return false;

                        }
                        else if(res[j].indexOf("__") > -1){

                            alert("Τουλάχιστον μία ετικέτα  περιέχει τουλάχιστον 2 φορές σε συνεχόμενη σειρά τον χαρακτήρα _");
                            return false;

                        }
                        else{ //elexgos an dyo tokens einai ta idia

                            for(var i = 0; i < res.length; i++){

                                if(i != j){

                                    if(res[i] === res[j]){

                                        alert("Δύο τουλάχιστον ετικέτες σου είναι ίδιες");
                                        return false;
                                    }

                                }

                            }

                        }

                    }






                    //elegxos an iparxei sthn database to idio


                    for(var k = 0; k < res.length; k++){

                        for(var l = 0; l < allTags.length; l++){

                            if(res[k] === allTags[l].tag){

                                alert("Τουλάχιστον μία ετικέτα υπάρχει ήδη στην λίστα");
                                return false;

                            }
                        }

                    }

                    for(var m = 0; m < res.length; m++){

                        var stringObj = '{"tag"'  +  ':"' + res[m] + '"}';
                        var obj = JSON.parse(stringObj);
                        allTags.push(obj);

                    }


                    return true;


                }
                else{

                    alert("Οι μόνοι χαρακτήρες που επιτρέπονται είναι γράμματα(κεφαλαία), αριθμοί, κάτω παύλες και κόμματα");
                    return false;
                }
            }
        };


        return AccessDeniedSingle;
    });/**
 * Created by Alexandros on 9/10/2014.
 */
/**
 * Created by Alexandros on 10/10/2014.
 */
/**
 * Created by Alexandros on 14/10/2014.
 */
