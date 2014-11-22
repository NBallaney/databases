DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE user (
  /* Describe your table here.*/
  uid SMALLINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(40),
  PRIMARY KEY (uid)
);


CREATE TABLE messages (
  /* Describe your table here.*/
  mid INT NOT NULL AUTO_INCREMENT,
  uid SMALLINT NOT NULL,
  body VARCHAR(160) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (mid),
  FOREIGN KEY (uid)
    REFERENCES user(uid)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

