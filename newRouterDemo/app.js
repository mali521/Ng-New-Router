/**
 * Created by hp on 6/29/2015.
 */


var studentArray=[];
var app=angular.module('app',['ngNewRouter','app.add','app.view','app.edit','ngMaterial','firebase'])
        .controller('AppController',['$router','$location',AppController]);

AppController.$routeConfig=[
    {
        path:'/add',
        component:'add'
    },
    {
        path:'/view',
        component:'view'
    },
    {
        path : '/edit/:id',
        component : 'edit'
    }
];


function AppController($router,$location){
    this.goToView=function(){
    $location.path('/view');
};
    this.goToAdd=function(){
        $location.path('/add');
    };


}