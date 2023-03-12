
const {Customer} = require('./db-create')





// -------  UPDATE  --------
async function func0(){
  try{
    const doc = await Customer.updateOne({_id: '640c1aad69374c5868e371a9'}, {email: 'zulekha4@gmail.com'})
    console.log(doc)
  } catch(err){
    console.log(err.message)
  }
} 
// func0()

async function func1(){
  try{
    const doc = await Customer.findOne({_id: '640c1aad69374c5868e371a9'})
    doc.email = 'zulekha24@gmail.com'
    await doc.save()
    console.log(doc)
  } catch(err){
    console.log(err.message)
  }
} 
// func1()
