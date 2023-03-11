
const {Customer} = require('./db-create')





async function func3(){
  try{
    const result = await Customer.deleteOne({_id: '640be69344e4c34c718a89cc'})
    console.log(result)
  } catch(err){
    console.log(err.message)
  }
}
// func3()
