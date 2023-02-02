const express = require("express");
const bodyParser = require("body-parser");
const Game = require("./models/games.js");
const Review = require("./models/reviews.js");
const Admin = require("./models/admins.js")
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Database connection
const url = "mongodb://localhost:27017/gameReviewAppDB";

// get all game info
app.get("/api/allGameInfo", async (req, res)=>{
  try{
    await mongoose.connect(url);
      console.log("Getting all game info...");
      Game.find((err, games) => {
        if (err) res.send(err);
        else {
          //console.log(games);
          res.send(games);
          mongoose.connection.close();
        }
      })
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
})

// update game details
app.put("/api/gameInfo/:id", async (req, res) => {
  try {
    //process request body
    const { cover_img, youtube_link } = req.body;
    // console.log(cover_img, youtube_link);

    let _id = req.params.id;
    _id = mongoose.Types.ObjectId(_id);

    await mongoose.connect(url);
    console.log("updating game details...");
    Game.updateOne(
      { _id: _id },
      { cover_img, youtube_link },

      (err, msg) => {
        if (err) {
          console.log("ERROR: ", err);
          res.send(err);
        } else {
          if (msg.modifiedCount == 0) {
            console.log(`No document updated`);
            res.send(`No document updated!`);
          } else {
            console.log(`Successfully updated ${msg.modifiedCount} game document!`);
            res.send(`Successfully updated ${msg.modifiedCount} game document!`);
          }
          mongoose.connection.close();
        }
      }
    );
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
});

// get game reviews
app.get("/api/reviews/:game", async (req, res)=>{
  try{
    let game = req.params.game
    // console.log("game is ", game)
    await mongoose.connect(url);
      console.log("Getting game reviews...");
      Review.find({game: game},(err, reviews) => {
        if (err) res.send(err);
        else {
          // console.log(reviews);
          res.send(reviews);
          mongoose.connection.close();
        }
      })
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
})

// update review
app.put("/api/gameReview/:id", async (req, res) => {
  try {
    //process request body
    const { username, title, comment } = req.body;
    console.log(username, title, comment);

    let _id = req.params.id;
    _id = mongoose.Types.ObjectId(_id);

    await mongoose.connect(url);
    console.log("updatting game review...");
    Review.updateOne(
      { _id: _id },
      { username, title, comment },

      (err, msg) => {
        if (err) {
          console.log("ERROR: ", err);
          res.send(err);
        } else {
          if (msg.modifiedCount == 0) {
            console.log(`No document updated`);
            res.send(`No document updated!`);
          } else {
            console.log(`Successfully updated ${msg.modifiedCount} review!`);
            res.send(`Successfully updated ${msg.modifiedCount} review!`);
          }
          mongoose.connection.close();
        }
      }
    );
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
});


// delete review
app.delete("/api/gameReviews/:id", async (req, res) => {
  try {
    let _id = req.params.id;
    _id = mongoose.Types.ObjectId(_id);

    await mongoose.connect(url);
    console.log("Deleting Review...");
    Review.deleteOne(
      { _id: _id },

      (err, msg) => {
        if (err) {
          console.log("ERROR: ", err);
          res.send(err);
        } else {
          if (msg.deletedCount == 0) {
            console.log(`No matching document found`);
            res.send(`No matching document found`);
          } else {
            console.log(`Successfully deleted ${msg.deletedCount} document`);
            res.send(`Successfully deletedd ${msg.deletedCount} document`);
          }
          mongoose.connection.close();
        }
      }
    );
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
});

// get psTopten infomation
app.get("/api/psToptenGameInfo", async (req, res) => {
    try {
      await mongoose.connect(url);
      console.log("Getting psTopten infomation...");
      Game.find({category:"psTopten"},(err, games) => {
        if (err) res.send(err);
        else {
          //console.log(games);
          res.send(games);
          mongoose.connection.close();
        }
      });
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  });

  // get psUpcoming infomation
  app.get("/api/psUpcomingGameInfo", async (req, res) => {
    try {
      await mongoose.connect(url);
      console.log("Getting psUpcoming information...");
      Game.find({category:"psUpcoming"},(err, games) => {
        if (err) res.send(err);
        else {
          //console.log(games);
          res.send(games);
          mongoose.connection.close();
        }
      });
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  });

  // get nsTopten info
  app.get("/api/nsToptenGameInfo", async (req, res) => {
    try {
      await mongoose.connect(url);
      console.log("Getting nsTopten info...");
      Game.find({category:"nsTopten"},(err, games) => {
        if (err) res.send(err);
        else {
          //console.log(games);
          res.send(games);
          mongoose.connection.close();
        }
      });
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  });

  // get nsUpcoming info
  app.get("/api/nsUpcomingGameInfo", async (req, res) => {
    try {
      await mongoose.connect(url);
      console.log("Getting nsUpcoming info...");
      Game.find({category:"nsUpcoming"},(err, games) => {
        if (err) res.send(err);
        else {
          //console.log(games);
          res.send(games);
          mongoose.connection.close();
        }
      });
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  });

  // get reviews from specific game
  app.get("/api/reviews/:gamename", async (req, res) => {
    try {
        let gamename = req.params.gamename;
        //console.log("Game name is ", gamename)
        
        await mongoose.connect(url);
        console.log(`Getting ${gamename}'s review...`);
      
        Review.find({game: gamename},(err, reviews) => {
            if (err) res.send(err);
            else {
            //console.log(reviews);
            res.send(reviews);
            mongoose.connection.close();
            }
        });
        } catch (err) {
        console.log(`ERROR: ${err}`);
        }
  });

  // create new review
  app.post("/api/review/:gamename", async (req, res) => {
    try {
        let game = req.params.gamename;
        //console.log("Game name is ", game)
        //process request body
        const { username, title, comment } = req.body;
        //console.log(game, username, title, comment);
            
        const review = new Review({
            game,
            username,
            title,
            comment,
        });

        await mongoose.connect(url);
        review.save((err) => {
            if (err) {
            console.log("ERROR: ", err);
            res.send(err);
            } else {
            console.log("Document inserted successfully");
            res.send(review);
            mongoose.connection.close();
            }
        });
        } catch (err) {
        console.log(`ERROR: ${err}`);
        }
  });
  

  // check admin auth
  app.post("/api/checkAdmin", async (req, res) => {
    try {
        const {username, password} = req.body
        // console.log(username, password)

        await mongoose.connect(url);
        console.log("checking auth...");
      
        Admin.find({username: username, password: password},(err, admin) => {
            if (err) res.send(err);
            else {
            //console.log(admin);
            if(!admin.length){
              res.send("Invalid username or password.")
            } else {
              res.send("Admin login successfully.");
            }
            mongoose.connection.close();
            }
        });
        } catch (err) {
        console.log(`ERROR: ${err}`);
        }
  });



const port = process.env.port || 5001;

app.listen(port, () => {
  console.log(`The server is up and listening on port ${port}`);
});