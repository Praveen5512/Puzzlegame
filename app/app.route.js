angular.module("app").config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl:"/app/pages/login.html",
    controller:"login"
  })
  .when("/signup", {
    templateUrl:"/app/pages/signup.html",
    controller:"signup"
  })
  .when("/guest", {
    templateUrl:"/app/pages/guest.html",
    controller:"guest"
  })
  .when("/multiuser", {
    templateUrl:"/app/pages/multiuser.html",
    controller:"multiuser"
  })
});
