const {Router} = require("express");
const router = Router();
const {Movie} = require("../persistence/imdb-schema")

//region GET /movies/tt324234 ✔
router.get("/movies/:imdb",  (req, res) => {
    const imdb = req.params.imdb;
    Movie.find(
        {"imdb": imdb},
        {},
         (err,movie) => {
           res.set("Content-Type", "application/json");
           if (err) {

           } else {
               res.status(200).send(movie);
           }
        }
    );
})
//endregion

//region GET http://localhost:8100/movies?page=0&size=10 ✔
router.get("/movies",  (req, res) => {
    const page = req.query.page || 0;
    const size = req.query.size || 10;
    const offset = page*size;
    Movie.find(
        {},
        {},
        {skip: offset, limit: size},
        (err,movies) => {
            res.set("Content-Type", "application/json");
            if (err) {

            } else {
                res.status(200).send(movies);
            }
        }
    );
})
//endregion

module.exports = {apiQuery: router};