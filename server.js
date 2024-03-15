import express from "express";
import controller from './controller.js'

const application = express()
application.use(express.json())

// APIs
application.get('/get-user-details', controller.getUserDetailsController)
application.post('/bio-data', controller.createUserDetailsController)

// port
const port = 2000
application.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
})