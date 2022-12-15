//region Kafka Producer
const {Kafka} = require("kafkajs");
const kafka = new Kafka({
    clientId: "imdb-consumer",
    brokers: ["localhost:9092"]
});
const consumer = kafka.consumer({
    "groupId": "imdb-consumer"
});

consumer.connect()
    .then(()=>{
        console.log("Connected to the kafka broker.")
        consumer.subscribe({topic:"imdb", fromBeginning: true})
                .then(()=>{
                    consumer.run({
                        eachMessage: async ({topic,partition,message}) => {
                            let movie = JSON.parse(message.value);
                            console.log(`new movie has arrived: ${movie.title}.`);
                        }
                    }).then(()=>{
                        console.log("Consumer is listening...");
                    }).catch(console.error);
                })
    })
    .catch(err => console.error(err));

//endregion