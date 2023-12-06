const mysql = require('mysql2')
const dotenv = require('dotenv')
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
    const result =await pool.query(` INSERT INTO user_details (name,age,address,pin_code,email_id,phone_number,gender,skills,linkedin_url,profile_url,no_of_views)
    VALUES(?,?,?,?,?,?,?,?,?,?,?)`,[data.name,data.age,data.address,data.pin_code,data.email_id,data.phone_number,data.gender,JSON.stringify(data.skills),data.linkedin_url,data.profile_url,data.no_of_views])
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