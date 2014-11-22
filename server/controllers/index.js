var models = require('../models');
var bluebird = require('bluebird');
var url = require('url');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('#');
      var query = url.parse(req.url, true).query;
      models['messages'].get(query);
    }, // a function which handles a get request for all messages
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
