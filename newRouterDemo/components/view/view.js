/**
 * Created by hp on 6/29/2015.
 */
//var studentArray=[]
var app = angular.module('app.view', ['ngNewRouter'])
    .controller('ViewController', ['$router', '$firebaseArray', '$location', ViewController]);


function ViewController($router, $firebaseArray, $location) {
    var that = this;
    that.allElement = [];
    var ref = new Firebase('https://datasave.firebaseio.com/saveadata');
    that.abc = $firebaseArray(ref);


    /*
     that.remove = function(index){
     console.log(index);
     that.allElement.splice(index,1)
     console.log(that.allElement);
     */

    that.edit = function (id) {
        $location.path('/edit/' + id)


    }
}
