
'use strict'
const express = require('express')
const app = express()
// const {MongoClient} = require('mongodb')
const {connectToDB, useDB} = require('./db')
const {ObjectId} = require('mongodb')
app.use(express.json())





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



// find all the books | Read All
app.get('/', (req, res) => {
  let books = []
  db.collection('books')
    .find()
    .forEach(book => books.push(book))
    .then(() => res.json(books))
    .catch(() => res.json({error: 'Can\'t fetch data'}))
})



// find a single book | Read One
app.get('/books/:id', (req, res) => {
  db.collection('books')
    .findOne({_id: parseInt(req.params.id)})
    .then(doc => res.json(doc))
    .catch(err => res.send(err))
})





//  -----inserted values----
// {
//   "_id": 7,
//   "title": "The Color of Flower",
//   "author": "Terry Pratchett",
//   "pages": 596,
//   "rating": 6,
//   "genres": ["romance"]
// }

// insert a book
app.post('/insert-one', (req, res) => {
  const book = req.body
  db.collection('books')
    .insertOne(book)
    .then(result => res.json(result))
    .catch(err => res.json({err: 'Couldn\'t create a new document.'}))
})

// insert many books
app.post('/insert-many', (req, res) => {
  const book = req.body
  db.collection('books')
    .insertMany(book)
    .then(result => res.json(result))
    .catch(err => res.json({err: 'Couldn\'t create a new document.'}))
})





// delete a book
app.delete('/delete/:id', (req, res) => {
    db.collection('books')
    .deleteOne({_id: parseInt(req.params.id)})
    .then(result => res.json(result))
    .catch(err => res.json({err: 'Couldn\'t delete the document.'}))
})

// delete a book
// app.delete('/delete/:id', (req, res) => {
//   if(ObjectId.isValid(req.params.id)){
//     db.collection('books')
//     .deleteOne({_id: ObjectId(req.params.id)})
//     .then(result => res.json(result))
//     .catch(err => res.json({err: 'Couldn\'t delete the document.'}))
//   }
//   else{
//     res.json({Error: 'Not a valid id'})
//   }
// })





//   ----updated values----
// {
//   "pages": 501,
//   "rating": 7,
//   "genres": ["scary"]
// }

// update a book
app.patch('/update/:id', (req, res) => {
  const updates= req.body
  db.collection('books')
    .updateOne({_id: parseInt(req.params.id)}, {$set: updates})
    .then(result => res.json(result))
    .catch(err => res.json({"Error": "Couldn\'t update the document"}))
})



// ------ read pages: 1, 2, 3 ... -------
app.get('/pages', (req, res) => {
  let pageNumber = req.query.p || 0
  let booksPerPage = 3
  let books = []

  db.collection('books')
    .find()
    .skip(pageNumber * booksPerPage)
    .limit(booksPerPage)
    .forEach(book => books.push(book))
    .then(() => res.json(books))
    .catch(() => res.json({Error: 'Couldn\'t fetch the books.'}))
})


