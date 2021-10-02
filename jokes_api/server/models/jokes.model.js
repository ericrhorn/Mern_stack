const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
	setup: String,
	punchline: String,
    createdAt: Date,
    updatedAt: Date,
});

const Joke = mongoose.model("Joke", jokeSchema);

module.exports = Joke;