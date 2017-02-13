// one server to rule them all
const app = require('.lib/app');
const connection = require('.lib/connection');
const http = require('http');
const DB_URI = 'mongodb://localhost:27017/db';

connection.connect(DB_URI)
    .catch(err => console.log('db connection failed: ', err));
server.listen(3000, () => {
    console.log('server listening: ', server.address());
});