const mongoose = require("mongoose");

const HighScoreSchema = new mongoose.Schema({
    personName: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
});

const AppHighScore = mongoose.model("GWFHighScores", HighScoreSchema);
module.exports = AppHighScore;