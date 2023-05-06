const mongoose = require('mongoose');

const connection = mongoose.createConnection
(`mongodb+srv://rahaf:rahaf2000@cluster.6l57v61.mongodb.net/nursery`).on('open',()=>{
    console.log('MongoDB connected');
}).on('error',()=>{
    console.log
    ("MongoDB connection error")
})

module.exports = connection ;// to use connection in the project

