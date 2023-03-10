
const {MongoClient} = require('mongodb')
require('dotenv').config()



let dbConnection

// module.exports = {
//   connectToDB: cb => {
//     MongoClient.connect('mongodb://127.0.0.1:27017/book_store')
//     .then(client => {
//       dbConnection = client.db()
//       return cb()
//     })
//     .catch(err => {
//       console.log(err)
//       return cb(err)
//     })
//   },
//   useDB: () => dbConnection
// }





// exports.connectToDB = connectToDB
// async function connectToDB (cb) {
//   try {
//     dbConnection = (await MongoClient.connect('mongodb://127.0.0.1:27017/book_store')).db()
//     cb ()
//   }
//   catch (err) {
//     console.log(err)
//   }
// }

// exports.useDB = useDB
// function useDB () {return dbConnection}





// exports.connectToDB = async cb => {
//   try {
//     dbConnection = (await MongoClient.connect('mongodb://127.0.0.1:27017/book_store')).db()
//     cb ()
//   }
//   catch (err) {
//     console.log(err)
//   }
// }
// exports.useDB = () => dbConnection





// ------ mongodb local server ------

// module.exports = {
//   connectToDB: async cb => {
//     try {
//       dbConnection = (await MongoClient.connect('mongodb://127.0.0.1:27017/book_store')).db()
//       cb ()
//     }
//     catch (err) {console.log(err)}
//   },
  
//   useDB: () => dbConnection
// }



// ------- mongodb atlas -------

module.exports = {
  connectToDB: async cb => {
    let uri = 'mongodb+srv://'+process.env.user+':'+process.env.pass+'@cluster0.pbwxcxc.mongodb.net/?retryWrites=true&w=majority'
    try {
      dbConnection = (await MongoClient.connect(uri)).db()
      cb ()
    }
    catch (err) {console.log(err)}
  },
  
  useDB: () => dbConnection
}









// multiple page query & fixed number of documents in a page

// db.books
//   .find()
//   .skip(5)
//   .limit(3)



// index

// db.books.find({rating:7}).explain('executionStats')   // query summary
// db.books.getIndexes()

// db.books.createIndex({rating: 7})
// db.books.dropIndex({rating: 7})
