'use strict'
const express = require('express')
const app = express()
// const {MongoClient} = require('mongodb')
const {connectToDB, useDB} = require('./db')
// const {ObjectId} = require('mongodb')



// let db
// async function connectToDB () {
//   db = (await MongoClient.connect('mongodb://127.0.0.1:27017/book_store')).db()
//   app.listen(3000, () => console.log('Server is running on port 3000'))
// }
// connectToDB()


let db
connectToDB( () => {
  app.listen(3000, () => console.log('Server is running on port 3000'))
  db = useDB()
})



app.get('/', (req, res) => {
  let books = []

  db.collection('books')
    .find()
    .forEach(book => books.push(book))
    .then(() => res.json(books))
    .catch(() => res.json({error: 'Can\'t fetch data'}))
})



app.get('/books/:id', (req, res) => {
  let book
  db.collection('books')
    .findOne({_id: parseInt(req.params.id)})
    .then(doc => res.json(doc))
    .catch(err => res.send(err))
})