angular.module('NoteWrangler').controller('ListItemsIndexController', function(ListItem, $scope){
  $scope.listItems = ListItem.query();
  $scope.search = {};

  $scope.getStyle = function(item) {
    return {'font-size': '10px', 'font-weight': 'normal'};
  };
});
