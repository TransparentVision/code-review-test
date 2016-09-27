angular.module('NoteWrangler').controller('NotesIndexController', function(Note, $scope){
  $scope.notes = Note.query();
  $scope.search = {};

  $scope.getStyle = function(item) {
    return {'color': '#FFF', 'font-weight': 'normal', 'background-color': 'gray'};
  };
});
