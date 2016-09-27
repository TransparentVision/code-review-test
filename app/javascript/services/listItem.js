angular.module('NoteWrangler').factory('ListItem', function($resource){
  return $resource('/listItems/:id', {id: "@id"}, {
    update: {
      method: "PUT"
    }
  });
});
