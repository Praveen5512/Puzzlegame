angular.module("app")
    .controller("guest", function ($scope, $timeout) {
        $scope.username = "Stranger";
        $scope.imgArr = shuffled;
        $scope.notClicked = true;
        $scope.revealedIndices = [];

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
    });

// Global Declarations
let checkarr = [];

function shuffle(a) {
    let cI = a.length;
    while (cI != 0) {
        let rI = Math.floor(Math.random() * cI);
        cI--;
        [a[cI], a[rI]] = [a[rI], a[cI]];
    }
    return a;
}

let puzmin = [
    { src: "/app/assets/images/arrAssets/1.png", id: 1 },
    { src: "/app/assets/images/arrAssets/2.png", id: 2 },
    { src: "/app/assets/images/arrAssets/3.png", id: 3 },
    { src: "/app/assets/images/arrAssets/4.png", id: 4 },
    { src: "/app/assets/images/arrAssets/5.png", id: 5 },
    { src: "/app/assets/images/arrAssets/6.png", id: 6 },
    { src: "/app/assets/images/arrAssets/7.png", id: 7 },
    { src: "/app/assets/images/arrAssets/8.png", id: 8 },
    { src: "/app/assets/images/arrAssets/9.png", id: 9 }
];

let concatedArr = puzmin.concat(puzmin);
let shuffled = shuffle(concatedArr);
console.log(shuffled);
