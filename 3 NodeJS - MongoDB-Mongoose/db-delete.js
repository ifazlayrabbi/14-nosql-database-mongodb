
const {Customer} = require('./db-create')
const {Color} = require('./db-create2')





async function func0(){
  try{
    const doc = await Color.deleteOne({_id: '640d0e71f894bb9e08bfa2b0'})
    console.log(doc)
  } catch(err){
    console.log(err.message)
  }
}
// func0()

async function func1(){
  try{
    const doc = await Color.deleteMany({name: 'White'})
    console.log(doc)
  } catch(err){
    console.log(err.message)
  }
}
// func1()

async function func2(){
  try{
    const doc = await Customer.deleteMany({age: {$in: [30, 34]}})
    console.log(doc)
  } catch(err){
    console.log(err.message)
  }
}
// func2()

async function func3(){
  try{
    const doc = await Customer.deleteOne({age: 21})
    console.log(doc)
  } catch(err){
    console.log(err.message)
  }
}
// func3()

async function func4(){
  try{
    const doc = await Color.deleteMany({rating: {$in: [7, 8, 9]}})
    console.log(doc)
  } catch(err){
    console.log(err.message)
  }
}
// func4()


