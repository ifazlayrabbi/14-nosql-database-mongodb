
const {Customer} =  require('./db-create')





async function func0(){
  try{
    const customer1 = await Customer
    .where('name')
    .equals('Zulekha')
    console.log(customer1)
  } catch(err){console.log(err.message)}
}
// func0()

async function func1(){
  try{
    const customer1 = await Customer
    .where('age')
    .gt(17)
    .lt(20)
    .where('name')
    .equals('Zulekha')
    console.log(customer1)
  } catch(err){console.log(err.message)}
}
// func1()

async function func2(){
  try{
    const customer1 = await Customer
    .where('name')
    .equals('Zulekha')
    .limit(3)
    .select(['name', 'age'])
    console.log(customer1)
  } catch(err){console.log(err.message)}
}
// func2()

async function func3(){
  try{
    const customer1 = await Customer
    .findOne({name: 'Rupa'})
    console.log(customer1)
  } catch(err){console.log(err.message)}
}
func3()