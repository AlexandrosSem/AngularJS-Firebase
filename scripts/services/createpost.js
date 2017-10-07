'use strict';

app.factory('Createpost',
    function (FIREBASE_URL,$firebase,$rootScope) {

        var ref = new Firebase(FIREBASE_URL);

        var Createpost = {
            allCategories: function () {
                return $firebase(ref.child("categories")).$asArray();
            },
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
            ,
            createArticle : function(category,tags,title,firstText,text,generatedDate,imageURL,username,userImage){




                if(imageURL === encodeURI(imageURL)){



                    $rootScope.checkImage(imageURL,
                        function(){

                            title  = encodeURIComponent(title);
                            firstText = encodeURIComponent(firstText);
                            text = encodeURIComponent(text);


                            ref.child("posts").push(JSON.parse('{"category"'  +  ':"' + category + '","userImage"' +  ':"' + userImage+ '","tag"' +  ':"' + tags+ '","title"' +  ':"' + title.toString()+ '","firstText"' +  ':"' + firstText.toString()+ '","text"' +  ':"' + text.toString()+ '","date"' +  ':' + generatedDate+ ',"imageURL"' +  ':"' + imageURL+ '","username"' +  ':"' + username+ '","comments_number"' +  ':0,"access"' +  ':"denied"}'));

                        },
                        function(){


                            imageURL = "https://scontent-a-ams.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1904260_10205311364811469_5343555384477499593_n.jpg?oh=442210aaf610fecd026fff41c36118c0&oe=54F2A580";

                            title  = encodeURIComponent(title);
                            firstText = encodeURIComponent(firstText);
                            text = encodeURIComponent(text);


                            ref.child("posts").push(JSON.parse('{"category"'  +  ':"' + category + '","userImage"' +  ':"' + userImage+ '","tag"' +  ':"' + tags+ '","title"' +  ':"' + title.toString()+ '","firstText"' +  ':"' + firstText.toString()+ '","text"' +  ':"' + text.toString()+ '","date"' +  ':' + generatedDate+ ',"imageURL"' +  ':"' + imageURL+ '","username"' +  ':"' + username+ '","comments_number"' +  ':0,"access"' +  ':"denied"}'));


                        });



                    return true;


                }
                else{



                    return false;

                }

            }
        };


        return Createpost;
    });/**
 * Created by Alexandros on 9/10/2014.
 */
/**
 * Created by Alexandros on 10/10/2014.
 */
