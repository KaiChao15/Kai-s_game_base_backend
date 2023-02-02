const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gameReviewAppDB")

console.log("database connected")

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

const review1 = new Review({
    game: "Ghost of Tsushima",
    username: "gamerlover1",
    title: "Love this game",
    comment: "Love this game. Don't miss it. I preordered this game."
})

const review2 = new Review({
    game: "Ghost of Tsushima",
    username: "fps_Believer426",
    title: "Nice graphic",
    comment: "The graphics is so advanced. Can't believe this is a 2016 game."
})

const review3 = new Review({
    game: "Ghost of Tsushima",
    username: "penguin4458",
    title: "Nice Story, online server need approvement.",
    comment: "The Story is very touching. Feel so much while playing the game. The multiplayer mode need approvment. A long waiting time to get into a room."
})

const review4 = new Review({
    game: "Nioh 2",
    username: "gamerlover2",
    title: "Love this game",
    comment: "Love this game.(Nioh 2) Don't miss it. I preordered this game."
})

const review5 = new Review({
    game: "Battlefield V",
    username: "gamerlover3",
    title: "Love this game",
    comment: "Love this game.(Battlefield V) Don't miss it. I preordered this game."
})

const review6 = new Review({
    game: "God of War",
    username: "gamerlover4",
    title: "Love this game",
    comment: "Love this game.() Don't miss it. I preordered this game."
})

const review7 = new Review({
    game: "Monster Hunter: World - Iceborne",
    username: "gamerlover5",
    title: "Love this game",
    comment: "Love this game.(Monster Hunter: World - Iceborne) Don't miss it. I preordered this game."
})

const review8 = new Review({
    game: "Horizon Zero Dawn",
    username: "gamerlover6",
    title: "Love this game",
    comment: "Love this game.(Horizon Zero Dawn) Don't miss it. I preordered this game."
})

const review9 = new Review({
    game: "NieR: Automata",
    username: "gamerlover7",
    title: "Love this game",
    comment: "Love this game.(NieR: Automata) Don't miss it. I preordered this game."
})

const review10 = new Review({
    game: "Metal Gear Solid V: The Phantom Pain",
    username: "gamerlover8",
    title: "Love this game",
    comment: "Love this game.() Don't miss it. I preordered this game."
})

const review11 = new Review({
    game: "Shadow of the Tomb Raider",
    username: "gamerlover9",
    title: "Love this game",
    comment: "Love this game.(Shadow of the Tomb Raider) Don't miss it. I preordered this game."
})

const review12 = new Review({
    game: "Sekiro: Shadows Die Twice",
    username: "gamerlover10",
    title: "Love this game",
    comment: "Love this game.(Sekiro: Shadows Die Twice) Don't miss it. I preordered this game."
})

const review13 = new Review({
    game: "Hogwarts Legacy",
    username: "gamerlover11",
    title: "Love this game",
    comment: "Love this game.(Hogwarts Legacy) Don't miss it. I preordered this game."
})

const review14 = new Review({
    game: "Wo Long: Fallen Dynasty",
    username: "gamerlover12",
    title: "Love this game",
    comment: "Love this game.(Wo Long: Fallen Dynasty) Don't miss it. I preordered this game."
})

const review15 = new Review({
    game: "Resident Evil 4",
    username: "gamerlover13",
    title: "Love this game",
    comment: "Love this game.(Resident Evil 4) Don't miss it. I preordered this game."
})

const review16 = new Review({
    game: "Star Wars Jedi: Survivor",
    username: "gamerlover14",
    title: "Love this game",
    comment: "Love this game.(Star Wars Jedi: Survivor) Don't miss it. I preordered this game."
})

const review17 = new Review({
    game: "Street Fighter 6",
    username: "gamerlover15",
    title: "Love this game",
    comment: "Love this game.(Street Fighter 6) Don't miss it. I preordered this game."
})

const review18 = new Review({
    game: "Animal Crossing: New Horizons",
    username: "gamerlover16",
    title: "Love this game",
    comment: "Love this game.(Animal Crossing: New Horizons) Don't miss it. I preordered this game."
})

const review19 = new Review({
    game: "Nintendo Switch Sports",
    username: "gamerlover17",
    title: "Love this game",
    comment: "Love this game.(Nintendo Switch Sports) Don't miss it. I preordered this game."
})

const review20 = new Review({
    game: "Ring Fit Adventure",
    username: "gamerlover18",
    title: "Love this game",
    comment: "Love this game.(Ring Fit Adventure) Don't miss it. I preordered this game."
})

const review21 = new Review({
    game: "Pokémon Brilliant Diamond",
    username: "gamerlover19",
    title: "Love this game",
    comment: "Love this game.(Pokémon Brilliant Diamond) Don't miss it. I preordered this game."
})

const review22 = new Review({
    game: "Pokémon Sword & Pokémon Shield Double Pack",
    username: "gamerlover20",
    title: "Love this game",
    comment: "Love this game.(Pokémon Sword & Pokémon Shield Double Pack) Don't miss it. I preordered this game."
})

const review23 = new Review({
    game: "The Legend of Zelda: Breath of the Wild",
    username: "gamerlover21",
    title: "Love this game",
    comment: "Love this game.(The Legend of Zelda: Breath of the Wild) Don't miss it. I preordered this game."
})

const review24 = new Review({
    game: "Super Smash Bros. Ultimate",
    username: "gamerlover22",
    title: "Love this game",
    comment: "Love this game.(Super Smash Bros. Ultimate) Don't miss it. I preordered this game."
})

const review25 = new Review({
    game: "Mario Kart 8 Deluxe",
    username: "gamerlover23",
    title: "Love this game",
    comment: "Love this game.(Mario Kart 8 Deluxe) Don't miss it. I preordered this game."
})

const review26 = new Review({
    game: "Monster Hunter Rise Sunbreak",
    username: "gamerlover24",
    title: "Love this game",
    comment: "Love this game.(Monster Hunter Rise Sunbreak) Don't miss it. I preordered this game."
})

const review27 = new Review({
    game: "Splatoon 3",
    username: "gamerlover25",
    title: "Love this game",
    comment: "Love this game.(Splatoon 3) Don't miss it. I preordered this game."
})

const review28 = new Review({
    game: "The Legend of Zelda: Tears of the Kingdom",
    username: "gamerlover26",
    title: "Love this game",
    comment: "Love this game.(The Legend of Zelda: Tears of the Kingdom) Don't miss it. I preordered this game."
})

const review29 = new Review({
    game: "Pikmin 4",
    username: "gamerlover27",
    title: "Love this game",
    comment: "Love this game.(Pikmin 4) Don't miss it. I preordered this game."
})

const review30 = new Review({
    game: "Fire Emblem Engage",
    username: "gamerlover28",
    title: "Love this game",
    comment: "Love this game.(Fire Emblem Engage) Don't miss it. I preordered this game."
})

const review31 = new Review({
    game: "Atelier Ryza 3: Alchemist of the End & the Secret Key",
    username: "gamerlover29",
    title: "Love this game",
    comment: "Love this game.(Atelier Ryza 3: Alchemist of the End & the Secret Key) Don't miss it. I preordered this game."
})

const reviews = [
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
    review9,
    review10,
    review11,
    review12,
    review13,
    review14,
    review15,
    review16,
    review17,
    review18,
    review19,
    review20,
    review21,
    review22,
    review23,
    review24,
    review25,
    review26,
    review27,
    review28,
    review29,
    review30,
    review31
]

Review.insertMany(reviews, (err, docs)=>{
    if (err) console.log("ERROR: ", err)
    else console.log("Successfully saved the documents to the gameReviewAppDB", docs)
}) 