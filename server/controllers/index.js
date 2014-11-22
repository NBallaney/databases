var models = require('../models');
var bluebird = require('bluebird');
var url = require('url');



module.exports = {
  messages: {
    get: function (req, res) {
      var urlQuery = url.parse(req.url, true).query;
      models['messages'].get(urlQuery, function(rows) {
        var obj = {results: rows};
        res.status(200).json(obj);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('b#',req.body);
      models['messages'].post(req.body, function () {
        res.status(201).send("We got your message!")
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
