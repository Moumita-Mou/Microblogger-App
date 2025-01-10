
/**
 * These are example routes for user management
 * This shows how to correctly structure your routes for the project
 */

const express = require("express");
const router = express.Router();
const assert = require('assert');

/**
 * @desc 
 */

//GET /about
   router.get("/about", function(req, res){
   res.render("about");
});

// GET /articles
  router.get("/articles", function(req, res, next){
  const sql = "SELECT * FROM Article ORDER BY ID"
  db.all(sql, [], function (err, rows){
      if(err){
        next(err);
      }
      res.render("articles", { model: rows });
  });
});

// GET /compose
  router.get("/compose", function(req, res){
  res.render("compose", { model: {} });
});

// POST /compose
  router.post("/compose", function(req, res, next){
  const sql = "INSERT INTO Article (Author, Title, Subtitle, Body) VALUES (?, ?, ?, ?)";
  const compose = [req.body.Author, req.body.Title, req.body.Subtitle, req.body.Body];
  db.run(sql, compose, function(err){    
      if(err){
        next(err); //send the error on to the error handler
      }
      res.redirect("/user/articles");
  });
});

// GET /modify/:id
  router.get("/modify/:id", function(req, res, next){
  const id = req.params.id;
  const sql = "SELECT * FROM Article WHERE ID = ?";
  db.get(sql, id, function (err, row){
      if(err){
        next(err); //send the error on to the error handler
      }
      res.render("modify", { model: row });
  });
});

// POST /modify/:id
  router.post("/modify/:id", function(req, res, next){
  const id = req.params.id;
  const article = [req.body.Author, req.body.Title, req.body.Subtitle, req.body.Body, id];
  const sql = "UPDATE Article SET Author = ?, Title = ?, Subtitle = ?, Body = ? WHERE (ID = ?)";
  db.run(sql, article, function(err){
      if(err){
        next(err); //send the error on to the error handler
      }
       res.redirect("/user/articles");
        
  });
});

// GET /discard/:id
  router.get("/discard/:id", function(req, res, next){
  const id = req.params.id;
  const sql = "SELECT * FROM Article WHERE ID = ?";
  db.get(sql, id, function(err, row){
      if(err){
        next(err); //send the error on to the error handler
      }
      res.render("discard", { model: row });
  });
});

// POST /discard/:id
  router.post("/discard/:id", function(req, res, next){
  const id = req.params.id;
  const sql = "DELETE FROM Article WHERE ID = ?";
  db.run(sql, id, function(err){
      if(err){
        next(err); //send the error on to the error handler
      }
      res.redirect("/user/articles");
  });
});

// GET /publish/:id
  router.get("/publish/:id", function(req, res, next){
  const id = req.params.id;
  const sql = "SELECT * FROM Article WHERE ID = ?";
  db.get(sql, id, function (err, row){
      if(err){
        next(err); //send the error on to the error handler
      }
      res.render("publish", { model: row });
  });
});

// POST /publish/
  router.post("/publish", function(req, res, next){
  const article = [req.body.Author, req.body.Title, req.body.Subtitle, req.body.Body];
  const sql = "INSERT INTO Publish (Author, Title, Subtitle, Body) VALUES (?, ?, ?, ?)";
  db.run(sql, article, function(err){    
        if(err){
          next(err); //send the error on to the error handler
        }
          res.redirect("/user/publishes");
        
  });
});

// GET /publishes
  router.get("/publishes", function(req, res, next){
  const sql = "SELECT * FROM Publish ORDER BY ID"
  db.all(sql, [], function (err, rows){
      if(err){
        next(err);
      }
      res.render("publishes", { model: rows });
  });
});


// GET /read/:id
    router.get("/read/:id", function(req, res, next){
    const id = req.params.id;
    const sql = "SELECT * FROM Publish WHERE ID = ?";
    db.get(sql, id, function(err, rows){
      if(err){
        next(err); //send the error on to the error handler
      }
        res.render("read", { model: rows });
    });
  });


// POST /read/:id
    router.post("/read/:id", function(req, res, next){
    const id = req.params.id;
    const article = [req.body.Author, req.body.Title, req.body.Subtitle, req.body.Body, id];
    const sql = "UPDATE Publish SET Author = ?, Title = ?, Subtitle = ?, Body = ? WHERE (ID = ?)";
    db.run(sql, article, function(err){
        if(err){
          next(err); //send the error on to the error handler
        }
        res.redirect("/user/publishes");
          
    });
  });

// GET /settings/:id
  router.get("/settings/:id", function(req, res, next){
  const id = req.params.id;
  const sql = "SELECT * FROM Article WHERE ID = ?";
  db.get(sql, id, function (err, row){
      if(err){
        next(err); //send the error on to the error handler
      }
      res.render("settings", { model: row });
  });
});

//POST /settings/:id
  router.post("/settings/:id", function(req, res, next){
  const id = req.params.id;
  const article = [req.body.Author, req.body.Title, req.body.Subtitle, id];
  const sql = "UPDATE Article SET Author = ?, Title = ?, Subtitle = ? WHERE (ID = ?)";
  db.run(sql, article, function(err){
      if(err){
        next(err); //send the error on to the error handler
      }
       res.redirect("/user/articles");        
  });
});


///////////////////////////////////////////// HELPERS ///////////////////////////////////////////

/**
 * @desc A helper function to generate a random string
 * @returns a random lorem ipsum string
 */
function generateRandomData(numWords = 5) {
  const str =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

  const words = str.split(" ");

  let output = "";

  for (let i = 0; i < numWords; i++) {
    output += choose(words);
    if (i < numWords - 1) {
      output += " ";
    }
  }

  return output;
}

/**
 * @desc choose and return an item from an array
 * @returns the item
 */
function choose(array) {
  assert(Array.isArray(array), "Not an array");
  const i = Math.floor(Math.random() * array.length);
  return array[i];
}

module.exports = router;
