const express = require("express");
const router = express.Router();
require("./imdb-schema")

// GET /movies/tt324234
router.get("/movies/:imdb",  (req, res) => {
    const imdb = req.params.imdb;
    Movie.find(
        {"imdb": imdb},
        {"title": true, "directors.name": true, "genres.name": true, "year": true},
         (err,movie) => {
           res.set("Content-Type", "application/json");
           if (err) {

           } else {
               res.status(200).send(movie);
           }
        }
    );
})
// GET http://localhost:8100/movies?page=0&size=10

module.exports = router;