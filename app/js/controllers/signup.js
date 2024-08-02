angular.module("app").controller("signup", function ($scope, $location) {
    


    $scope.signup=function () {
        let fname = $scope.firstname;
        let lname = $scope.lastname;
        let age = $scope.age;
        let email = $scope.email;
        let username = $scope.username;
        let password = $scope.password;
        let cPassword = $scope.confirmPassword;

        if(  password!=undefined  && password == cPassword)
        {
            let obj={firstname:fname, lastname:lname, username:username ,age:age, email:email, password:password}
            users.push(obj)
            console.log(users);
            $location.path("/")
        }
        else{
            alert("Password haven't matched")
        }
    }
    
})