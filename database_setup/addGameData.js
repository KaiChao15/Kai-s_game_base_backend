const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gameReviewAppDB")

console.log("database connected")

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

const psGame1 = new Game({
    name: "Ghost of Tsushima",
    api_code_name: "ghost-of-tsushima",
    rank: 1,
    category: "psTopten",
    cover_img: "https://www.psu.com/wp/wp-content/uploads/2019/12/GhostofTsushima-4.jpg",
    youtube_link: "https://www.youtube.com/embed/iqysmS4lxwQ"
})

const psGame2 = new Game({
    name: "Nioh 2",
    api_code_name: "nioh-2-the-complete-edition",
    rank: 2,
    category: "psTopten",
    cover_img: "https://waytoomany.games/wp-content/uploads/2021/02/nioh2.jpg",
    youtube_link: "https://www.youtube.com/embed/2f2O8JTFseU"
})

const psGame3 = new Game({
    name: "Battlefield V",
    api_code_name: "battlefield-v",
    rank: 3,
    category: "psTopten",
    cover_img: "https://i.ytimg.com/vi/a7ZpQadiyqs/maxresdefault.jpg",
    youtube_link: "https://www.youtube.com/embed/FgGAh3EdN0g"
})

const psGame4 = new Game({
    name: "God of War",
    api_code_name: "god-of-war-2",
    rank: 4,
    category: "psTopten",
    cover_img: "https://deadline.com/wp-content/uploads/2022/03/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7-e1646683029138.jpeg",
    youtube_link: "https://www.youtube.com/embed/CJ_GCPaKywg"
})

const psGame5 = new Game({
    name: "Monster Hunter: World - Iceborne",
    api_code_name: "monster-hunter-world-iceborne",
    rank: 5,
    category: "psTopten",
    cover_img: "https://i.ytimg.com/vi/q4AoVUamhxo/maxresdefault.jpg",
    youtube_link: "https://www.youtube.com/embed/m6guHcGEqX8"
})

const psGame6 = new Game({
    name: "Horizon Zero Dawn",
    api_code_name: "horizon-zero-dawn",
    rank: 6,
    category: "psTopten",
    cover_img: "https://i.ytimg.com/vi/u4-FCsiF5x4/maxresdefault.jpg",
    youtube_link: "https://www.youtube.com/embed/u4-FCsiF5x4"
})

const psGame7 = new Game({
    name: "NieR: Automata",
    api_code_name: "nierautomata",
    rank: 7,
    category: "psTopten",
    cover_img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/nier-2/9/92/NierAutomata_Pic04.jpg",
    youtube_link: "https://www.youtube.com/embed/wJxNhJ8fjFk"
})

const psGame8 = new Game({
    name: "Metal Gear Solid V: The Phantom Pain",
    api_code_name: "metal-gear-solid-v-the-phantom-pain",
    rank: 8,
    category: "psTopten",
    cover_img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-phantom-pain/0/08/MGSV_TITLE_CARD.jpg",
    youtube_link: "https://www.youtube.com/embed/NL4ZxDWLwpM"
})

const psGame9 = new Game({
    name: "Shadow of the Tomb Raider",
    api_code_name: "shadow-of-the-tomb-raider",
    rank: 9,
    category: "psTopten",
    cover_img: "https://www.justpushstart.com/wp-content/uploads/2018/09/5b83592ca76d41f1f2264f2122a617c7663efd36.png",
    youtube_link: "https://www.youtube.com/embed/XYtyeqVQnRI"
})

const psGame10 = new Game({
    name: "Sekiro: Shadows Die Twice",
    api_code_name: "shadows-die-twice",
    rank: 10,
    category: "psTopten",
    cover_img: "https://i.ytimg.com/vi/Rx8pbCN1OcU/maxresdefault.jpg",
    youtube_link: "https://www.youtube.com/embed/rXMX4YJ7Lks"
})

const psGame11 = new Game({
    name: "Hogwarts Legacy",
    api_code_name: "harry-potter-rpg-working-title",
    rank: 1,
    category: "psUpcoming",
    cover_img: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/mxIC3LtMR3tG5s0l8VoygoE0.png",
    youtube_link: "https://www.youtube.com/embed/2AZmuZNu5LA"
})

const psGame12 = new Game({
    name: "Wo Long: Fallen Dynasty",
    api_code_name: "wo-long-fallen-dynasty",
    rank: 2,
    category: "psUpcoming",
    cover_img: "https://cdn.akamai.steamstatic.com/steam/apps/1448440/capsule_616x353.jpg?t=1667351715",
    youtube_link: "https://www.youtube.com/embed/xlmdeQFyqC0"
})

const psGame13 = new Game({
    name: "Resident Evil 4",
    api_code_name: "resident-evil-4-2023",
    rank: 3,
    category: "psUpcoming",
    cover_img: "https://www.residentevil.com/re4/assets/images/common/share-re.png",
    youtube_link: "https://www.youtube.com/embed/E69tKrfEQag"
})

const psGame14 = new Game({
    name: "Star Wars Jedi: Survivor",
    api_code_name: "star-wars-jedi-survivor",
    rank: 4,
    category: "psUpcoming",
    cover_img: "https://images.igdb.com/igdb/image/upload/t_original/ar1qqi.jpg",
    youtube_link: "https://www.youtube.com/embed/4HLDaBGdnLc"
})

const psGame15 = new Game({
    name: "Street Fighter 6",
    api_code_name: "street-fighter-6",
    rank: 5,
    category: "psUpcoming",
    cover_img: "https://www.streetfighter.com/6/assets/images/sns_6.jpg",
    youtube_link: "https://www.youtube.com/embed/1INU3FOJsTw"
})

const nsGame1 = new Game({
    name: "Animal Crossing: New Horizons",
    api_code_name: "animal-crossing-2019",
    rank: 1,
    category: "nsTopten",
    cover_img: "https://m.media-amazon.com/images/S/aplus-media/vc/9dab8441-a805-43da-8391-b0f69b4742f4.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    youtube_link: "https://www.youtube.com/embed/_3YNL0OWio0"
})

const nsGame2 = new Game({
    name: "Nintendo Switch Sports",
    api_code_name: "nintendo-switch-sports",
    rank: 2,
    category: "nsTopten",
    cover_img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/n/nintendo-switch-sports-switch/hero",
    youtube_link: "https://www.youtube.com/embed/tiwjvBSS_Wk"
})

const nsGame3 = new Game({
    name: "Ring Fit Adventure",
    api_code_name: "ringfit-adventure",
    rank: 3,
    category: "nsTopten",
    cover_img: "https://i.ytimg.com/vi/skBNiJd61Qw/maxresdefault.jpg",
    youtube_link: "https://www.youtube.com/embed/vD6Ua4NfPZ4"
})

const nsGame4 = new Game({
    name: "Pokémon Brilliant Diamond",
    api_code_name: "pokemon-diamond-pearl-2021",
    rank: 4,
    category: "nsTopten",
    cover_img: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_PokemonBrilliantDiamond_enGB_image1600w.jpg",
    youtube_link: "https://www.youtube.com/embed/TUOlZBxdrTA"
})

const nsGame5 = new Game({
    name: "Pokémon Sword & Pokémon Shield Double Pack",
    api_code_name: "pokemon-2019",
    rank: 5,
    category: "nsTopten",
    cover_img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/p/pokemon-sword-and-pokemon-shield-double-pack-digital-version-switch/hero",
    youtube_link: "https://www.youtube.com/embed/fPO2ouGn0lA"
})

const nsGame6 = new Game({
    name: "The Legend of Zelda: Breath of the Wild",
    api_code_name: "the-legend-of-zelda-breath-of-the-wild",
    rank: 6,
    category: "nsTopten",
    cover_img: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
    youtube_link: "https://www.youtube.com/embed/zw47_q9wbBE"
})

const nsGame7 = new Game({
    name: "Super Smash Bros. Ultimate",
    api_code_name: "super-smash-bros-ultimate",
    rank: 7,
    category: "nsTopten",
    cover_img: "https://www.smashbros.com/data/bs/en_US/en_GB/img/1_US.jpg",
    youtube_link: "https://www.youtube.com/embed/WLu7e8RZoYc"
})

const nsGame8 = new Game({
    name: "Mario Kart 8 Deluxe",
    api_code_name: "mario-kart-8-deluxe",
    rank: 8,
    category: "nsTopten",
    cover_img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero",
    youtube_link: "https://www.youtube.com/embed/tKlRN2YpxRE"
})

const nsGame9 = new Game({
    name: "Monster Hunter Rise Sunbreak",
    api_code_name: "monster-hunter-rise-sunbreak",
    rank: 9,
    category: "nsTopten",
    cover_img: "https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/06/01/monster-hunter-rise-sunbreak-preview-header_feature.jpg",
    youtube_link: "https://www.youtube.com/embed/HAElcOxO6JM"
})

const nsGame10 = new Game({
    name: "Splatoon 3",
    api_code_name: "splatoon-3",
    rank: 10,
    category: "nsTopten",
    cover_img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/s/splatoon-3-switch/hero",
    youtube_link: "https://www.youtube.com/embed/GUYDXVDLmns"
})

const nsGame11 = new Game({
    name: "The Legend of Zelda: Tears of the Kingdom",
    api_code_name: "the-legend-of-zelda-breath-of-the-wild-sequel",
    rank: 1,
    category: "nsUpcoming",
    cover_img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-legend-of-zelda-tears-of-the-kingdom-switch/hero",
    youtube_link: "https://www.youtube.com/embed/b2nKt-uf24Y"
})

const nsGame12 = new Game({
    name: "Pikmin 4",
    api_code_name: "pikmin-4",
    rank: 2,
    category: "nsUpcoming",
    cover_img: "https://assets-prd.ignimgs.com/2022/09/13/pikmin-4-button-mod-1663093777703.jpg",
    youtube_link: "https://www.youtube.com/embed/1o7fQ5z8g0I"
})

const nsGame13 = new Game({
    name: "Fire Emblem Engage",
    api_code_name: "fire-emblem-engage",
    rank: 3,
    category: "nsUpcoming",
    cover_img: "https://gameranx.com/wp-content/uploads/2022/09/Fire-Emblem-Engage.png",
    youtube_link: "https://www.youtube.com/embed/3ExaJIB5Phk"
})

const nsGame14 = new Game({
    name: "Atelier Ryza 3: Alchemist of the End & the Secret Key",
    api_code_name: "atelier-ryza-3-alchemist-of-the-end-the-secret-key",
    rank: 4,
    category: "nsUpcoming",
    cover_img: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_AtelierRyza3AlchemistOfTheEndandTheSecretKey_image1600w.jpg",
    youtube_link: "https://www.youtube.com/embed/qDG_g2tcsNY"
})

const gamesData = [psGame1,psGame2,psGame3,psGame4,psGame5,psGame6,psGame7,psGame8,psGame9,psGame10,psGame11,psGame12,psGame13,psGame14,psGame15,nsGame1,nsGame2,nsGame3,nsGame4,nsGame5,nsGame6,nsGame7,nsGame8,nsGame9,nsGame10,nsGame11,nsGame12,nsGame13,nsGame14]
Game.insertMany(gamesData, (err, docs)=>{
    if (err) console.log("ERROR: ", err)
    else console.log("Successfully saved the documents to the gameReviewAppDB", docs)
}) 
