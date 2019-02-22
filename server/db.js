// import mongoose from 'mongoose'
//
// // TODO pass in and use config
// export default function (config, callback) {
//   const dbName = config.databaseName
//   const dbServer = 'localhost:27018'
//   const db = dbServer + '/' + dbName
//   const urn = 'mongodb://' + db
//   console.log('DB URN', urn)
//   mongoose
//   .connect(urn, { useNewUrlParser: true })
//   .then((conn) => {
//     console.log('MongoDB Connected to ' + db)
//     callback(conn)
//   })
//   .catch(err => console.log(err))
// }
