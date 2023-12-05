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

const createUserDetailsDb = async (name, age, address, pin_code, email_id, phone_number,
    gender, skills, linkedin_url, profile_url, no_of_views) => {
    const result = await pool.query(`
        INSERT INTO user_details(name, age, address, pin_code, email_id, phone_number,
            gender, skills, linkedin_url, profile_url, no_of_views)
            VALUES(?,?,?,?,?,?,?,?,?,?,?)`, [name, age, address, pin_code, email_id, phone_number,
        gender, skills, linkedin_url, profile_url, no_of_views]
    )
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

module.exports = createUserDetailsDb