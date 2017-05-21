var url = 'https://api.trello.com/1/search?idBoards=54ad9476179886c979b60080';
var apiKey = '4cc334d87ada29b1884404fe3f30956a';

var app = angular.module("myApp", ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when("/main", {
            templateUrl: "main.html",
            controller: "myCtrl"
        })
        .when("/zaloguj", {
            templateUrl: "zaloguj.html",
            controller: "myCtrl"
        })
        .when("/zarejestruj", {
            templateUrl: "zarejestruj.html",
            controller: "myCtrl"
        })
        .when("/ulubione", {
            templateUrl: "ulubione.html"
        })
        .when("/menuUzytkownika", {
            templateUrl: "menuUzytkownika.html"
        })
        .otherwise({
            redirectTo: $routeProvider});
}]);

app.controller("myCtrl", function($scope, $http, $location) {
    $scope.sprawdz = function() {
        var cokolwiek = $("#products").val();
        $http.get(url + '&query=' + cokolwiek + '&key=' + apiKey).then(function(response) {
            $scope.przepisy = response.data.cards;
        });
    }
    $scope.insertData = function() {
        if ($scope.password != $scope.repassword) {
            $scope.help = "Podane hasła nie są identyczne, spróbuj jeszcze raz!";
        } else {
            $http.post('zarejestruj.php', {
                'email': $scope.email,
                'password': $scope.password
            }).success(function() {
                alert("Rejestracja powiodła się!");
                $location.url("/zaloguj");
            });
        }
    }
    $scope.add = function(p) {
        var name = p;
        console.log(name);
    }
    $scope.login = function() {
        //var us = $("#email1").val();
        //var pwd = $("#password1").val();
        var parameter = JSON.stringify({user: $scope.user, pass: $scope.pwd});
        $http.post('zaloguj.php', parameter).then(function() {
            $.get('http://v-ie.uek.krakow.pl/~s187772/SPA/WpolDoKotleta/zaloguj.php', function(response) {
                alert(response);
            });
            
        });
    }
});