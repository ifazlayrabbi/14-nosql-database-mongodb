const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");





    const myDB = client.db("myDB");
    const myColl = myDB.collection("pizzaMenu");
    
    const docs = [
       { name: "Sicilian pizza", shape: "square" },
       { name: "New York pizza", shape: "round" },
       { name: "Grandma pizza", shape: "square" }
    ];
    
    const insertManyresult = await myColl.insertMany(docs);
    let ids = insertManyresult.insertedIds;
    
    console.log(`${insertManyresult.insertedCount} documents were inserted.`);
    
    for (let id of Object.values(ids)) {
       console.log(`Inserted a document with id ${id}`);
    }
    





  } finally {
    await client.close();
  }
}
run().catch(console.dir);











