//  on déclare un module app qu'on affecte à notre application appli
var app = angular.module('appli', []);
// un service est représenté par $ ( $scope / $http)
app.controller('carCtrl', function($scope, $http){
// $http est un servie / .get récupère le contenu de voiture.json
// .then (par la suite) : on récupère des infos que l'on ne possède pas encore
// le paramètre de la fonction correspond à la réponse que l'on attend
  $http.get('voiture.json').then(function(respons){
// .data récupère les données qu'il y a dans le fichier .json
    $scope.cars = respons.data;
  });
});
