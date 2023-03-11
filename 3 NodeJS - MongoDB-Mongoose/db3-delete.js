
const {Customer} = require('./db-create')





async function func3(){
  try{
    const result = await Customer.deleteOne({_id: '640bc03024e5d00b38d39aa7'})
    console.log(result)
  } catch(err){
    console.log(err.message)
  }
}
func3()
