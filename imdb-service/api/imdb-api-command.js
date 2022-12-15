const {Router} = require("express");

class ImdbApiCommand {
    constructor(Movie, socketIOService, kafkaProducer) {
        this.Movie = Movie;
        this.socketIOService = socketIOService;
        this.kafkaProducer = kafkaProducer;
        this.router = Router();
        this.router.post("/movies", (req, res) => {
            const movie = req.body;
            const movieModel = new Movie(movie);
            movieModel.save(
                (err, status) => {
                    res.set("Content-Type", "application/json");
                    if (err) {

                    } else {
                        res.status(200).send(status);
                        /*                ws.clients.forEach(client => client.send(JSON.stringify(movie),(err)=>{
                                            console.log(err);
                                        }));*/
                        let message = JSON.stringify(movie);
                        this.socketIOService.sendMessage("movie-events", message);
                        this.kafkaProducer.send({
                            topic: "imdb",
                            messages: [
                                {"key": movie.imdb, "value": message}
                            ]
                        });
                    }
                }
            );
        })

        this.router.put("/movies", (req, res) => {
            const movie = req.body;
            const imdb = movie.imdb;
            Movie.updateOne(
                {imdb},
                {$set: movie},
                {upsert: false},
                (err, status) => {
                    res.set("Content-Type", "application/json");
                    if (err) {

                    } else {
                        res.status(200).send(status);
                    }
                }
            );
        })

        this.router.delete("/movies/:imdb", (req, res) => {
            const imdb = req.params.imdb;
            Movie.findOneAndDelete(
                {imdb},
                (err, deletedMovie) => {
                    res.set("Content-Type", "application/json");
                    if (err) {

                    } else {
                        res.status(200).send(deletedMovie);
                    }
                }
            );
        })
    }
};

module.exports = {ImdbApiCommand};