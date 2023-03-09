
const {MongoClient} = require('mongodb')



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





module.exports = {
  connectToDB: async cb => {
    try {
      dbConnection = (await MongoClient.connect('mongodb://127.0.0.1:27017/book_store')).db()
      cb ()
    }
    catch (err) {console.log(err)}
  },
  
  useDB: () => dbConnection
}



