angular.module('NoteWrangler').controller('ListItemsShowController', function(Note, $scope, $routeParams, $location){
  $scope.listItem = Note.get({id: $routeParams.id});
});