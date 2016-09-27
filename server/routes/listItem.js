var _ = require('lodash');
var ListItem = require('../models/listItem')

module.exports = function(app) {
  app.get('/listItems', function(req, res) {
    res.json(ListItem.all());
  });

  app.post('/listItems', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(ListItem.create(req.body));
    }, 1000);
  });

  app.put('/listItems/:id', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(ListItem.update(req.body));
    },1000)
  });

  app.get('/listItems/:id', function(req, res) {
    var listItemId = parseInt(req.param('id'), 10);
    res.json(ListItem.get(listItemId) || {});
  });

  app.delete('/listItems/:id', function(req, res) {
    res.json(ListItem.delete(parseInt(req.param('id'), 10)) || {});
  });
};
