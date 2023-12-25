const express = require('express')
const { getUserDetailsController, createUserDetailsController } = require('./controller.js')

const application = express()
application.use(express.json())

// APIs
application.get('/get-user-details', getUserDetailsController)
application.post('/bio-data', createUserDetailsController)

const port = 2000
application.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
})