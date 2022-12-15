const mongoose = require("mongoose");
const connectionUrl = "mongodb://localhost:27017/imdb";
mongoose.connect(
    connectionUrl,
    {
        useNewUrlParser: true,
        socketTimeoutMS: 0,
        keepAlive: true
    }
)
const genreSchema = new mongoose.Schema({
    "_id": Number,
    "name": {
        type: String,
        required: true
    }
});
const directorSchema = new mongoose.Schema({
    "_id": Number,
    "imdb": {
        type: String,
        required: true,
        unique: true
    },
    "name": {
        type: String,
        required: true
    },
});
const movieSchema = new mongoose.Schema({
    "_id": Number,
    "imdb": {
        type: String,
        required: true,
        unique: true
    },
    "title": {
        type: String,
        required: true,
        minLength: 3
    },
    "year": {
        type: Number,
        required: true,
        min: 1900,
        max:2023
    },
    directors: [directorSchema],
    genres: [genreSchema]
});

const Movie = mongoose.model("movies1", movieSchema);