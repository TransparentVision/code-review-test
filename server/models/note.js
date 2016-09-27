var _ = require('lodash');
var Category = require('./category')
var User = require('./user')
var notes = [
  {"id":1 ,"userId": 13, "categoryId": 8, "description": "NgModel Best Practice", "content" : "Always use dot syntax when using NgModel! Treat Scope as read-only in templates & write-only in controllers. The purpose of the scope is to refer to the model, not be the model. The model is your javascript objects. When doing bidirectional binding with ngModel make sure you don't bind directly to the scope properties. This will cause unexpected behavior in the child scopes.", "title" : "NgModel BP"},
  {"id":2 ,"userId": 2, "categoryId": 3, "description" : "Markers on a **DOM element** that tell AngularJS's HTML compiler `$compile` to attach a specified behavior to that DOM element.", "title" : "Directives", "content": "Markers on a **DOM element**"},
  {"id":3 ,"userId": 1, "categoryId": 6, "description" : "Clarify the confusion between Service the term and `service` the angular method and to explain the 5 different Service recipes in Angular.", "title" : "Service Service? Really Angular?","content": "There are 5 Recipes used to create a Service. One of those *was* unfortunately named, Service. So yes, amongst its fellow peers such as Provider Service and Factory Service, there is in fact a Service Service."},
  {"id":4 ,"userId": 2, "categoryId": 6, "description" : "QUESTIONABLE DESCRIPTION GOES HERE", "title" : "TEST TEST TEST", "content": "QUESTIONABLE CONTENT GOES HERE"},
  {"id":5 ,"userId": 4, "categoryId": 6, "description" : "Define Service", "title" : "What is a Service", "content": "Service: Angular services are objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app."},
  {"id":6 ,"userId": 5, "categoryId": 6, "description" : "Steps for Creating a Service", "title" : "How do you create a Service?", "content": "You can register a service to our Angular module `app` with a one of the following 5 recipes: \\n 	- **factory**  \\n 	- **provider**  \\n 	- **service**  \\n 	- **value**  \\n 	- **constant** "}
]
var lastId = 6;

var buildNotes = function() {
  // Make a deep copy so we don't change the main notes array
  var rawNotes = JSON.parse(JSON.stringify(notes));
  var builtNotes = [];
  var newNote;

  _.forEach(rawNotes, function(note) {
    note.category = Category.get(note.categoryId);
    builtNotes.push(note);
  });

  _.forEach(builtNotes, function(note) {
    note.user = User.get(note.userId);
  });

  return builtNotes;
};

module.exports = {

  get: function(id) {
    return _.find(buildNotes(), _.matchesProperty('id', id));
  },

  all: function() {
    return buildNotes();
  },

  update: function(note) {
    var updatedNote = _.find(notes, _.matchesProperty('id', note.id));
    if(updatedNote){
      updatedNote = note;
    }
    return updatedNote;
  },

  delete: function(id) {
    var deletedNote;
    _.remove(notes, function(note) {
     return note.id == id;
   });
    return deletedNote;
  },

  create: function(note) {
    lastId += 1;
    note.id = lastId;
    notes.push(note)
    return note;
  }
}
