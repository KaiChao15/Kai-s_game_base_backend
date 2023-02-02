const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gameReviewAppDB")

console.log("database connected to admins")

const adminSchema = new mongoose.Schema({
    username: {
        type:String,
        required: [true, "Please check the entry, there is no admin username."]
    },
    password:{
        type:String,
        required: [true, "Please check the entry, there is no admin password."]
    }
})


const Admin = mongoose.model("Admin",adminSchema)

module.exports = Admin