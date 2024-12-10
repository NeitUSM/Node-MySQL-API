CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE emplyee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE emplyee;

INSERT INTO emplyee VALUES
    (1, 'Matia', 1000),
    (2, 'Miguel', 2000),
    (3, 'Branco', 400),
    (4, 'Feña', 700);