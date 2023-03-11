
const {Customer} = require('./db-create')





//  --------  READ  ---------

// Customer.findById('640bf0f6c0ecffabf71138f6')
// .then(result => console.log(result))
// .catch(err => console.log(err.message))

async function func1(){
  try{
    const result = await Customer.findById('640bfca2d4495124f33eb2fb')
    console.log(result)
  } catch(err){
    console.log(err.message)
  }
} 
// func1()


async function func2(){
  try{
    const result = await Customer.find({_id: '640c1aad69374c5868e371a9'})
    console.log(result)
  } catch(err){
    console.log(err.message)
  }
} 
func2()


async function func3(){
  try{
    const result = await Customer.find({age: 16})
    console.log(result)
  } catch(err){
    console.log(err.message)
  }
} 
// func3()