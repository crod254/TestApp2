slidesApp.controller('SlideListCtrl', function ($scope, $http) {
  $http.get('products/slides.json').success(function(data) {
    $scope.slides = data;
  });

  $scope.orderProp = 'id';
});

slidesApp.controller('ProductListCtrl', function ($scope, $http) {
  $http.get('products/products.json').success(function(data) {
    $scope.slides = data;
  });

  $scope.orderProp = 'id';
});