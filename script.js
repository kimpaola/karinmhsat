var karin = angular.module('karin', []);
karin.controller('Operaciones', function($scope) {
$scope.precio = 800
$scope.iva = 0.12
$scope.precio = $scope.precio
  $scope.iva = $scope.precio * $scope.iva;
}); 