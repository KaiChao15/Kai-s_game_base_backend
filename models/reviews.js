const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gameReviewAppDB")

console.log("database connected to reviews")

const reviewSchema = new mongoose.Schema({
    game: {
        type:String,
        required: [true, "Please check the entry, there is no game name for the review."]
    },
    username:{
        type:String,
        required: [true, "Please check the entry, there is no user name."]
    },
    title: {
        type: String,
        required: [true, "Please give a title"],
    },
    comment: {
        type: String,
        required: [true, "Please add a comment"]
    }
})

const Review = mongoose.model("Review",reviewSchema)

module.exports = Review