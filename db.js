// By Cristian Franco
// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// async function connect(url) {
//     // mongoose.set('useCreateIndex', true);
//     await mongoose.connect(url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
//     console.log('[db] succesfully connected');
// }




const { MongoClient } = require('mongodb');

async function connect(url) {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        console.log('[db] succesfully connected');
        const collection = client.db("test").collection("devices");
        client.close();
    });
}


module.exports = connect;