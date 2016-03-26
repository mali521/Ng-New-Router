var app = angular.module('app.edit', ['ngNewRouter','firebase']);
app.controller('EditController' , function( $location , $routeParams ,$firebaseObject) {
    var $scope = this;
    //this.name = this.get[$routeParams.id].name;
    //this.email = this.get[$routeParams.id].email;
    //this.number = this.get[$routeParams.id].number;
    //this.gender = this.get[$routeParams.id].data.group;
    console.log($routeParams.id);

    var ref = new Firebase('https://datasave.firebaseio.com/saveadata');
    $scope.data = {}
    this.id = $routeParams.id;
    this.list = {};
    this.list = $firebaseObject(ref.child(this.id));

    this.list.$loaded()
        .then(
        function () {
            $scope.name = $scope.list.name;
            $scope.mail = $scope.list.email;
            $scope.number = $scope.list.number;
            $scope.data.group = $scope.list.gender;
        });

    $scope.update = function () {
        ref.child(this.id).set({
            first: $scope.first,
            last: $scope.last,
            phone: $scope.phone,
            email: $scope.email
        });
        $location.path('/view');
    }



    this.update = function () {



        this.name = "";
        this.email = "";
        this.gender = "";
        this.number = "";

        $location.path('/view');




    };


})
