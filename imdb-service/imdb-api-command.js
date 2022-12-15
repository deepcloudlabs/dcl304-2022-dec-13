const express = require("express");
const router = express.Router();
require("./imdb-schema")
//const ws = require("./websocket-service")
const sessions = require("./websocketio-service")

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
/*                ws.clients.forEach(client => client.send(JSON.stringify(movie),(err)=>{
                    console.log(err);
                }));*/
                sessions.forEach(session => session.emit("movie-events", JSON.stringify(movie)));
                // const numOfListeners = ws.emit("movie-events", movie);
                // console.log(`Message is sent to ${numOfListeners} listener(s)`);
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