const express = require('express')
const { getUserDetailsController, createUserDetailsController } = require('./controller.js')

const application = express()
application.use(express.json())

// APIs
application.get('/get-user-details', getUserDetailsController)
application.post('/bio-data', createUserDetailsController)

const port = 3000
application.listen(port, () => {
    console.log(`server is running on the port ${port}`);
})