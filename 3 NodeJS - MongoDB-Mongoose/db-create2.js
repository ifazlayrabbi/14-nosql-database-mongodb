
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://'+process.env.user+':'+process.env.pass+'@cluster0.pbwxcxc.mongodb.net/?retryWrites=true&w=majority')



const colorSchema = new mongoose.Schema({
  name: String,
  rating: Number
})
const Color = mongoose.model('Color', colorSchema)
exports.Color = Color

const green = new Color({
  name: 'green',
  rating: 7
})
// green.save()

const yellow = new Color({
  name: 'Yellow',
  rating: 8
})
// yellow.save()






const friendSchema = mongoose.Schema({
  name: String,
  age: Number,
  favoriteColor: colorSchema
})
const Friend = mongoose.model('Friend', friendSchema)
exports.Friend = Friend

const Afrin = new Friend({
  name: 'Afrin',
  age: 23,
  favoriteColor: green
})
// Afrin.save()

async function keya(){
  try{
    const keya = await Friend.findOne({name: 'Keya'})
    keya.favoriteColor = yellow
    await keya.save()
    console.log('Updated Keya.')
  } catch(err) {console.log(err.message)}
}
// keya()

Friend.findOne({name: 'Keya'})
.then((keya) => {
  keya.favoriteColor = yellow
  // keya.save()
  console.log('Updated Keya - yellow')
})
.catch((err) => console.log(err.message))

