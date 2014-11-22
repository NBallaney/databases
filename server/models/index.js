var db = require('../db');




module.exports = {
  messages: {
    get: function (urlQuery, controllerHandler) {
      var orderClause = urlQuery.order? 'order by '+ urlQuery.order : '';

      db.query('SELECT name AS username,text,roomname,createdAt,mid AS objectId from user, messages where user.uid = messages.uid ' + orderClause + ' DESC', function(err, rows, fields) {
        if (err) throw err;
        controllerHandler(rows);
      });

    }, // a function which produces all the messages
    post: function (body,controllerHandler) {
      console.log('m#', body);
      db.query("select count(*) AS count from user where name = '" + body.username + "'", function(err, rows, fields) {
        console.log('?', rows);
        if (err) throw err;
        if (rows[0].count === 0) {
          db.query('INSERT into user (name) values ("' + body.username + '")', function(err, rows, fields) {
            if (err) throw err;
            db.query('INSERT into messages (uid,text,roomname) values ( (SELECT uid from user where \
              user.name = "' + body.username + '"),"' + body.text +'","'+ body.roomname + '")', function (err, rows, fields){
            controllerHandler();
            });
          });
        } else {
          db.query('INSERT into messages (uid,text,roomname) values ( (SELECT uid from user where \
            user.name = "' + body.username + '"),"' + body.text +'","'+ body.roomname + '")', function (err, rows, fields){
          controllerHandler();
          });
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

