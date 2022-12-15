const express = require("express");
const router = express.Router();
require("./imdb-schema")

//region POST http://localhost:8100/movies ✔
router.post("/movies",  (req, res) => {
    const movie = req.body;
    const movieModel = new Movie(movie);
    movieModel.save(
        (err,status) => {
            res.set("Content-Type", "application/json");
            if (err) {

            } else {
                res.status(200).send(status);
            }
        }
    );
})
//endregion

//region PUT http://localhost:8100/movies ✔
router.put("/movies",  (req, res) => {
    const movie = req.body;
    const imdb = movie.imdb;
    Movie.updateOne(
        {imdb},
        {$set: movie},
        {upsert: false},
        (err,status) => {
            res.set("Content-Type", "application/json");
            if (err) {

            } else {
                res.status(200).send(status);
            }
        }
    );
})
//endregion

//region DELETE http://localhost:8100/movies/{imdb} ✔
router.delete("/movies/:imdb",  (req, res) => {
    const imdb = req.params.imdb;
    Movie.findOneAndDelete(
        {imdb},
        (err,deletedMovie) => {
            res.set("Content-Type", "application/json");
            if (err) {

            } else {
                res.status(200).send(deletedMovie);
            }
        }
    );
})
//endregion

module.exports = router;