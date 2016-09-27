var _ = require('lodash');
var Category = require('./category')
var User = require('./user')
var listItems = [
  {"id":1 ,"userId": 13, "categoryId": 1, "description": "Must Do 1", "title" : "Fix Item 1","content": "The following steps are necessary for Item 1."},
  {"id":2 ,"userId": 2, "categoryId": 2, "description" : "Must Do 2", "title" : "Fix Item 2","content": "The following steps are necessary for Item 2."},
  {"id":3 ,"userId": 1, "categoryId": 3, "description" : "Must Do 3", "title" : "Fix Item 3", "content": "The following steps are necessary for Item 3."},
  {"id":4 ,"userId": 2, "categoryId": 4, "description" : "Must Do 4", "title" : "Fix Item 4", "content": "The following steps are necessary for Item 4."},
  {"id":5 ,"userId": 4, "categoryId": 5, "description" : "Must Do 5", "title" : "Fix Item 5", "content": "The following steps are necessary for Item 5."},
  {"id":6 ,"userId": 5, "categoryId": 6, "description" : "Must Do 6", "title" : "Fix Item 6", "content": "The following steps are necessary for Item 6."}
]
var lastId = 6;

var buildListItems = function() {
  var rawListItems = listItems;
  var builtNotes = [];
  var listItem;

  for(var i=0, l=rawListItems.length; i < l; i++) {
    listItem = rawListItems[i];
    listItem.user = User.get(listItem.userId);
    listItem.category = Category.get(listItem.categoryId);
    builtNotes.push(listItem);
  }
  return builtNotes
}

module.exports = {
  get: function(id) {
    return _.find(buildListItems(), function(listItem){
      return listItem.id === id;
    });
  },
  all: function() {
    return buildListItems();
  },
  update: function(listItem) {
    var updatedListItem;
    for(var i=0, l=listItems.length; i < l; i++) {
      if(listItems[i].id === listItem.id){
        _.assign(listItems[i], listItem);
        updatedListItem = listItems[i];
        break;
      }
    }
    return updatedListItem;
  },
  delete: function(id) {
    var deletedListItem;
    for(var i=0, l=listItems.length; i < l; i++) {
      if(listItems[i].id === id){
        deletedListItem = listItems[i];
        listItems.splice(i, 1);
        break;
      }
    }
    return deletedListItem;
  },
  create: function(listItem) {
    lastId += 1;
    listItem.id = lastId;
    listItems.push(note)
    return listItem;
  }
}
