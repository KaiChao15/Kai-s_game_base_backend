const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gameReviewAppDB")

console.log("database connected to games")

const gameSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Please check the entry, there is no game name."]
    },
    api_code_name:{
        type:String,
        required: [true, "Please check the entry, there is no game api code name."]
    },
    rank: {
        type: Number,
        required: [true, "Please give a rank"],
        min: 1,
        max: 10
    },
    category: {
        type: String,
        required: [true, "Please put into a category: psTopten, psUpcoming, nsTopten, nsUpcoming"]
    },
    cover_img:{
        type: String,
        required: [true, "Please put a game cover img url"]
    },
    youtube_link: {
        type: String,
        required: [true, "Please put a game trailer url from YouTube"]
    }
})

const Game = mongoose.model("Game",gameSchema)

module.exports = Game