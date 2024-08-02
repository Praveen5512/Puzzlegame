angular.module("app").controller("login", function($scope, $location, $rootScope) {
    
    $scope.message = "1 Page";
    
    
    $scope.guestBtn = function() {
        $location.path("/guest");
    };

    $scope.submitForm = function() {
        if ($scope.loginForm.$valid) {
            
            let userss=users.filter(function (user) {
                if(user.username == $scope.username && user.password == $scope.password)
                {
                    return user;
                }
            })
            console.log(users);
            let requests=users.filter(function (user) {
                if(user.username != userss[0].username)
                {
                    return user;
                }
            })
            
            if(userss[0].username == $scope.username && userss[0].password == $scope.password)
            {
                $rootScope.currentUser=userss[0].username
                $rootScope.friendReq=requests;
                $location.path("/multiuser")
            }
            else{
                alert("wrong credentials")
            }
            console.log(userss);
            console.log(userss[0].username)
            
        } else {
           $scope.username=""
           $scope.password=""
            
        }
    };

    $scope.togglePasswordVisibility = function() {
        var passwordField = document.querySelector('input[name="password"]');
        if ($scope.showPassword) {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    };
});
