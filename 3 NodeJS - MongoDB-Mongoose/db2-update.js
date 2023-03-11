
const {Customer} = require('./db-create')





// -------  UPDATE  --------
async function func3(){
  try{
    const result = await Customer.updateOne({_id: '640bbee780f72cc906c862bc'}, {email: 'rupa26@gmail.com'})
    console.log(result)
  } catch(err){
    console.log(err.message)
  }
} 
func3()
