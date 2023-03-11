
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/myDB')

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
})

const Fruit = mongoose.model('Fruit', fruitSchema)

const fruit = new Fruit({
  name: 'Apple',
  rating: 8,
  review: 'good apple ever.'
})

// fruit.save()



const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number
})
const People = mongoose.model('People', peopleSchema)
const people = new People({
  name: 'Rahim',
  age: 37
})
// people.save()



