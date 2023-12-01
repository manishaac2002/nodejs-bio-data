const express = require('express')
const mysql =require('mysql2')
const dotenv =require('dotenv')
dotenv.config()

const application = express()
application.use(express.json())

// connection
const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    port:process.env.MYSQL_PORT,//specify the port number 
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE_NAME
}).promise()

pool.getConnection((error, connection) => {
 if (connection) {
    console.log("Database connected successfully ");
 } else {
    console.log(error,"Error in connecting with database");
 }
})

pool.on('error', (err) => {
    console.error('Database pool error:', err);
  });



// APIs
application.get('/', (request, response) => {
    response.send('Hello World')
})
application.post('/bio-data', (request, response) => {
    const { name, email, address, phone_number, profile_image } = request.body
    console.log(request.body);
    response.send('This is bio data')
})

const port =3000
application.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
})