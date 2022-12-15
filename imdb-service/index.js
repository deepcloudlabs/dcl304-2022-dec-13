const port = 8100;
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const api = express();
api.use(logger('dev'))
api.use(bodyParser.json({limit: "5mb"}));

let sessions = [];

//region Kafka Producer
const {Kafka} = require("kafkajs");
const kafka = new Kafka({
    clientId: "imdb-service",
    brokers: ["localhost:9092"]
});
const producer = kafka.producer();

producer.connect()
    .then(()=>console.log("Connected to the kafka broker."))
    .catch(err => console.error(err));

//endregion

//region Mongoose
const mongoose = require("mongoose");
const connectionUrl = "mongodb://127.0.0.1:27017/imdb";
mongoose.connect(
    connectionUrl,
    {
        useNewUrlParser: true,
        socketTimeoutMS: 0,
        keepAlive: true,
        useUnifiedTopology: true
    }
)

mongoose.set('strictQuery', true);

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

Movie = mongoose.model("movies1", movieSchema);
//endregion

//region REST API DOCUMENTATION (swagger-ui, OpenAPI) ✔
const swaggerUi = require("swagger-ui-express");
const swaggerApiDocument = require("./resources/swagger.json");
api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerApiDocument));
//endregion

//region POST http://localhost:8100/movies ✔
api.post("/movies",  (req, res) => {
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
                let message = JSON.stringify(movie);
                sessions.forEach(session => session.emit("movie-events", message));
                producer.send({
                    topic: "imdb",
                    messages: [
                        {"key": movie.imdb, "value": message}
                    ]
                });
                // const numOfListeners = ws.emit("movie-events", movie);
                // console.log(`Message is sent to ${numOfListeners} listener(s)`);
            }
        }
    );
})
//endregion

//region PUT http://localhost:8100/movies ✔
api.put("/movies",  (req, res) => {
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
api.delete("/movies/:imdb",  (req, res) => {
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

//region GET /movies/tt324234 ✔
api.get("/movies/:imdb",  (req, res) => {
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
api.get("/movies",  (req, res) => {
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

let server = api.listen(port, () => {
    console.log(`Api is running at ${port}`);
});

const socketIo = require("socket.io");


const io = socketIo.listen(server,{
    "cors": {
        "origins": "*",
        "methods": ["GET", "POST", "PUT"]
    }
});

io.on("connection", (session) => {
    console.log(`new ws connection is open: ${session.id}`);
    sessions.push(session);
    io.on("disconnect",()=>{
        console.log(`connection is closed: ${session.id}`);
        let new_sessions = sessions.filter(_session => _session.id !== session.id);
        sessions.splice(0);
        new_sessions.forEach(_session => sessions.push(_session))
    });
});
