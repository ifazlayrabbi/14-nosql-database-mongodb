
require('dotenv').config()
const mongoose = require('mongoose')
const uri = 'mongodb+srv://'+process.env.user+':'+process.env.pass+'@cluster0.pbwxcxc.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri)








const userSchema = new mongoose.Schema({
  name: String,
  age: Number
})
const User = mongoose.model('User', userSchema)



const user1 = new User({
  name: 'Rahim',
  age: 33
})
// user1.save()

new User({
  name: 'Kabir',
  age: 55
})
// .save().then(() => console.log('User saved'))

// User.create({
//   name: 'Kasem',
//   age: 22
// })
// .then(() => console.log('New User Saved.'))









const customerSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  created: Date,
  updated: Date,
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: {
    street: String,
    city: String
  }
})
const Customer = mongoose.model('Customer', customerSchema)



const customer1 = new Customer({
  name: 'Rupa',
  age: 26,
  email: 'rupa@gmail.com',
  hobbies: ['Music', 'Singing', 'Dance'],
  address: {
    street: '12A, Road No: 2',
    city: 'Dhaka'
  }
})
// customer1.save().then(() => console.log('Customer is added.'))

const customer2 = new Customer({
  name: 'Zulekha',
  age: 23,
  email: 'Zulekha23@gmail.com',
  hobbies: ['Reading', 'Praying', 'Caring'],
  address: {
    street: '14B, Road No: 7',
    city: 'Rajshahi'
  },
  bestFriend: '640bbee780f72cc906c862bc'
})

customer2.save()
.then(() => console.log('Customer is added.'))
.catch(err => console.log(err.message))
