// src/mongoClient.js
//sxa 4/29/2024: The original code is from: https://mrvautin.com/re-use-mongodb-database-connection-in-routes/ 

const { MongoClient } = require('mongodb');
const db_client = new MongoClient(process.env.Mongo_URI);

async function connect() {
    await db_client.connect();
}

function get() {
    return db_client;
}

async function close() {
    await db_client.close();
}

module.exports = {
    connect,
    get,
    close
};