

const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    port:process.env.MYSQL_PORT,//specify the port number 
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE_NAME
}).promise()
