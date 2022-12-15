//region Kafka Producer
const {Kafka, Partitioners} = require("kafkajs");
const kafka = new Kafka({
    clientId: "imdb-service",
    brokers: ["localhost:9092"]
});
const producer = kafka.producer({createPartitioner: Partitioners.LegacyPartitioner});

producer.connect()
    .then(() => console.log("Connected to the kafka broker."))
    .catch(err => console.error(err));

//endregion

module.exports = {kafkaProducer: producer}