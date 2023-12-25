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

async function createNewUser(data) {
    const result = await pool.query(` INSERT INTO user_details (name,age,address,pin_code,email_id,phone_number,gender,skills,linkedin_url,profile_url,no_of_views)
    VALUES(?,?,?,?,?,?,?,?,?,?,?)`, [data.name, data.age, data.address, data.pin_code, data.email_id, data.phone_number, data.gender, JSON.stringify(data.skills), data.linkedin_url, data.profile_url, data.no_of_views])
    return result
}
async function createAdminUser(data) {
    const result = await pool.query(` INSERT INTO admin (admin_name,admin_email_id,admin_mobile_number,admin_profile_url,created_by)
    VALUES(?,?,?,?,?)`, [data.admin_name,data.admin_email_id,data.admin_mobile_number,data.admin_profile_url,data.created_by])
    const lastUserId = `SELECT LAST_INSERT_ID() `
    const lastAdminId = result[1][0].lastId;
    console.log(lastAdminId);
    return result
}
async function admin(data, callback) {
    try {
    
      const result = await pool.query(` INSERT INTO admin (admin_name,admin_email_id,admin_mobile_number,admin_profile_url,created_by)
      VALUES(?,?,?,?,?)`, [data.admin_name,data.admin_email_id,data.admin_mobile_number,data.admin_profile_url,data.created_by])
      const lastUserId = result.admin_access_id

      callback(null, {result,lastUserId})

      return result
    } catch (error) {
      console.log(error)
      callback(error)
    }}
    // const data = {
    //     admin_name: 'John Doe',
    //     admin_email_id: 'john@example.com',
    //     admin_mobile_number: '45678',
    //     admin_profile_url: 'https://example.com/profile',
    //     created_by: 5678
    // };
    
    // admin(data, (error, result) => {
    //     if (error) {
    //         console.error(error);
    //     } else {
    //         console.log(result);
    //     }
    // });
pool.getConnection((error, connection) => {
    if (error) {
        console.log(error, "Error in connecting with database");
    } else {
        console.log("Database connected successfully ");
    }
})

pool.on('error', (err) => {
    console.error('Database pool error:', err);
});

module.exports = {createNewUser,createAdminUser,admin}