const express = require("express");

async function fun(){
   let i=0;
   while (i<1_000_000_000){
     i++;
     if (i===1_000)
        console.log(`i is ${i}.`);
   }
   return Math.floor(Math.random() * 1_000);
}

const app = express();
const port = process.env.PORT || 4100;

app.get("/non-blocking/", async (req, res) => {
  res.status(200).send("This page is non-blocking");
});

app.get("/blocking/", async (req, res) => {
  let result = await fun();
  res.status(200).send(`This page is blocking: ${result}.`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


