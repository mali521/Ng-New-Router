/**
 * Created by hp on 6/29/2015.
 */
 var studentArray=[];

var app=angular.module('app.add',['ngNewRouter','firebase'])
    .controller('AddController',['$router',AddController]);


function AddController($router){
var that=this;
    that.allElement=[];
var ref= new Firebase('https://datasave.firebaseio.com/saveadata');

    var temp={};
    that.adder=function(){
        temp={
            name:that.name,
            email:that.mail,
            number:that.number,
            gender:that.data.group
        };
        ref.push(temp);
        console.log(temp);
    }

}