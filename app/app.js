angular
  .module("app", ["ngRoute"])
  .controller("MainController", function ($scope, $rootScope) {
    $scope.title = "Puzzles";
   
  });


  // Global Declrations

  let users=[
    {firstname:"Praveen", lastname:"Star", username:"bumblebee" ,age:22, email:"praveen2015slv@gmail.com", password:"Gameisnotoveryet"},
    {firstname:"Eren", lastname:"Yeager", username:"tatake" ,age:21, email:"eremika@gmail.com", password:"eremika"},
    {firstname:"Light", lastname:"Yagami", username:"Shinigami" ,age:21, email:"lightmisa@gmail.com", password:"deathisnomore"}
  ]
