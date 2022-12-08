require('dotenv').config() // document environment, automatic just of thenvironmnent

//mongoDb connection...
const MongoClient = require('mongodb').MongoClient;

//add database connections...
const uri = 'mongodb+srv://Niko:233@cluster0.ela4eij.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true })

client.connect((err,db) => {
    if(!err) {
        console.log('MongoDB Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})

module.exports = client; 