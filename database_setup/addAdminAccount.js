const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gameReviewAppDB")

console.log("database connected")

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

const admin = new Admin({
    username: "admin",
    password: "password"
})

Admin.insertMany(admin, (err, docs)=>{
    if (err) console.log("ERROR: ", err)
    else console.log("Successfully saved the documents to the gameReviewAppDB", docs)
}) 