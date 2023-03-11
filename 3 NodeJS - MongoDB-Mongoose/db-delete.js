
const {Customer} = require('./db-create')





async function func0(){
  try{
    const doc = await Customer.deleteOne({_id: '640c1aad69374c5868e371a8'})
    console.log(doc)
  } catch(err){
    console.log(err.message)
  }
}
func0()


