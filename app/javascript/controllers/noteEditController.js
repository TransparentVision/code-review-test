angular.module('NoteWrangler').controller('NotesEditController', function($scope,User, Note, $routeParams, $location, $resource){
  $scope.getCategory = function() {
    return $resource('/categories/:id');
  };

  $scope.note = Note.get({id: $routeParams.id})
  $scope.isSubmitting = false;
  $scope.categories = $scope.getCategory().query();
  $scope.users = User.query();

  $scope.saveNote = function(note){
    $scope.isSubmitting = true;

    note.$update().finally(function(){
      $scope.isSubmitting = false;
      $location.path("/notes/" + note.id);
    });
  }
});
