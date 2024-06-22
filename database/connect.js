
const mysql = require('mysql')
const mongoose = require('mongoose')

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'phpmyadmin',
    password:'1234',
    database:'phpmyadmin'

});


db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

module.exports = db
// const con = mongoose.connect( 'mongodb+srv://kamaudavid1803:2xUI4OH9akfPFjtV@cluster0.xhlubgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

// .then(() =>console.log('Connected to mongoDb'))
// .catch(err => console.error('could not connect to mongoDb', err))

// module.exports = con