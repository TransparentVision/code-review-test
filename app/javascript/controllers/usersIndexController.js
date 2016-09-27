angular.module('NoteWrangler').controller('UsersIndexController', function(User, $scope){
  $scope.users = User.query();

  $scope.updateRole = function(user){
    user.type = "EXTERNAL";
  }
});