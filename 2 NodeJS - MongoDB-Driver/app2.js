
const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')
// const {connectToDB, useDB} = require('./db')



let dbConnection
async function connectToDB (cb) {
  try {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017/book_store')
    dbConnection = client.db()
    return cb ()
  }
  catch (err) {
    console.log(err)
    return cb (err)
  }
}
function useDB () {
  return dbConnection
}

let db
connectToDB(err => {
  if(!err){
    app.listen(3000, () => console.log('Server is running at port 3000'))
    db = useDB()
  }
})




app.get('/', (req, res) => {
  let books = []

  db.collection('books')
    .find()
    .forEach(book => books.push(book))
    .then(() => res.json(books))
    .catch(() => res.json({error: 'Can\'t fetch data'}))
})

