const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");




    const myDB = client.db("myDB");
    const myColl = myDB.collection("pizzaMenu");
    const doc = { name: "Neapolitan pizza", shape: "round" };
    const result = await myColl.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);



  } finally {
    await client.close();
  }
}
run().catch(console.dir);











