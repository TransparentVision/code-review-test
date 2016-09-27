angular.module('NoteWrangler').controller('ListItemsEditController', function($scope, User, ListItem, $routeParams, $location, $resource){
  $scope.getCategory = function() {
    return $resource('/categories/:id');
  };

  $scope.listItem = ListItem.get({id: $routeParams.id})
  $scope.isSubmitting = false;
  $scope.categories = $scope.getCategory().query();
  $scope.users = User.query();

  $scope.saveListItem = function(listItem){
    $scope.isSubmitting = true;

    listItem.$update().finally(function(){
      $scope.isSubmitting = false;
      $location.path("/listItems/" + listItem.id);
    });
  }
});
