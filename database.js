const mysql = require('mysql2')
const dotenv = require('dotenv')
const aws = require('./aws.js');
dotenv.config()

// connection
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,//specify the port number 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME
}).promise()

async function createNewUser(data){
    const [result] =await pool.query(data)
    return result
}

pool.getConnection((error, connection) => {
    if (error) {
        console.log(error, "Error in connecting with database");
    } else {
        console.log("Database connected successfully ");
    }
    // pool.release()
})

pool.on('error', (err) => {
    console.error('Database pool error:', err);
});

module.exports = createNewUser