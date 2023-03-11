
require('dotenv').config()
const mongoose = require('mongoose')
const uri = 'mongodb+srv://'+process.env.user+':'+process.env.pass+'@cluster0.pbwxcxc.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri)








// ----  CREATE  ----

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
  age: {
    type: Number,
    min: 1,
    max: 100
  },
  evenNum: {
    type: Number,
    validate: {
      validator: val => val % 2 === 0,
      message: msg => msg.value + ' is not an even number.'
    }
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 12
  },
  created: {
    type: Date,
    immutable: true,
    default: () => Date.now()
  },
  updated: {
    type: Date,
    default: () => Date.now()
  },
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: {
    street: String,
    city: String
  }
})
const Customer = mongoose.model('Customer', customerSchema)
exports.Customer = Customer



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
  age: 'a',
  evenNum: 28,
  email: 'Zulekha16@gmail.com',
  hobbies: ['Reading', 'Praying', 'Caring'],
  address: {
    street: '14B, Road No: 7',
    city: 'Rajshahi'
  },
  bestFriend: '640bf0f6c0ecffabf71138f6'
})

// customer2.save()
// .then(() => console.log('Customer is added.'))
// .catch(err => console.log(err.message))

async function func1(){
  try{
    await customer2.save()
    console.log('Customer added.')
  } catch(err){
    console.log(err.message)
  }
}
// func1()
