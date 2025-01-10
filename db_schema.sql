
-- This makes sure that foreign_key constraints are observed and that errors will be thrown for violations
PRAGMA foreign_keys=ON;

BEGIN TRANSACTION;

--create your tables with SQL commands here (watch out for slight syntactical differences with SQLite)

--stores all user inputs regarding articles as draft
CREATE TABLE IF NOT EXISTS Article (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Author VARCHAR(100) NOT NULL,
    Title VARCHAR(100) NOT NULL,
    Subtitle VARCHAR(100) NOT NULL,
    Body VARCHAR(100)
  );

--stores all user inputs regarding articles which are published
 CREATE TABLE IF NOT EXISTS Publish (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Author VARCHAR(100) NOT NULL,
    Title VARCHAR(100) NOT NULL,
    Subtitle VARCHAR(100),
    Body VARCHAR(100)
  );  
 

--inserted default data as an article as draft

INSERT INTO Article ("ID", "Author", "Title", "Subtitle", "Body") VALUES (1, 'Conquera', 'A Daunting Task', 'A Unique Story', 'ONCE UPON A TIME');


COMMIT;

