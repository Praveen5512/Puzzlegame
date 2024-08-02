angular.module("app")
.controller("multiuser", function ($scope,$timeout, $rootScope) {
    $scope.username = $rootScope.currentUser 
    $scope.friendReq = $rootScope.friendReq
    $scope.imgArr = shuffled;
    $scope.notClicked = true;
    $scope.revealedIndices = [];
    $scope.disp=false;
    $scope.player1game=[];
    $scope.player2game=[];

    // If array gets filled up

    // $scope.revealedIndices=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]



    // Button Functionality
    $scope.clickfn = function (index) {
        if($scope.revealedIndices.length == $scope.imgArr.length)
            {
                alert("game over")
            }
        if (!$scope.notClicked || $scope.revealedIndices.includes(index)) {
            return;
        }

        $scope.revealedIndices.push(index);
        checkarr.push(index);
        console.log(checkarr);

        if (checkarr.length >= 2) {
            $scope.notClicked = false; 

            if($scope.imgArr[checkarr[0]].id === $scope.imgArr[checkarr[1]].id) {

                checkarr = [];
                $scope.notClicked = true; 
            } 
            else{
                $timeout(function () {
                    $scope.revealedIndices.splice($scope.revealedIndices.indexOf(checkarr[0]), 1);
                    $scope.revealedIndices.splice($scope.revealedIndices.indexOf(checkarr[1]), 1);
                    checkarr = [];
                    $scope.notClicked = true; 
                }, 1000); 
            }
        }
       
    };

    $scope.accept=function (player) {
        
        $scope.player=player;
        $scope.disp=true;
        console.log(player);
    }
    $scope.removeUser=function () {
        $scope.disp=false;
    }


    $scope.player1=function () {
        alert("Player 1")
        $scope.player2game=$scope.revealedIndices;
        $scope.revealedIndices=[];
        $scope.revealedIndices=$scope.player1game;
    }




    $scope.player2=function () {
        alert("Player 2")
        $scope.player1game=$scope.revealedIndices;
        $scope.revealedIndices=[];
        $scope.revealedIndices=$scope.player2game;

    }
    console.log($scope.friendReq);
    console.log($rootScope.friendReq);
});

