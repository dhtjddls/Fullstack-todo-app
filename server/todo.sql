SHOW databases;
USE kdt;

CREATE TABLE todo (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  done TINYINT(1) NOT NULL DEFAULT 0
);

DESC todo;

INSERT INTO todo (title, done) VALUES ('nak todo1', 1); 
INSERT INTO todo (title, done) VALUES ('nak todo2', 0); 
INSERT INTO todo (title, done) VALUES ('nak todo3', 1); 
INSERT INTO todo (title, done) VALUES ('nak todo4', 0); 
INSERT INTO todo (title, done) VALUES ('nak todo5', 1); 
INSERT INTO todo (title, done) VALUES ('nak todo6', 1); 
INSERT INTO todo (title, done) VALUES ('nak todo7', 0); 