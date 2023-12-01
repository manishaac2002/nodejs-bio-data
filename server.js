const express = require('express')
const application = express()

application.use(express.json())

application.get('/', (request, response) => {
    response.send('Hello World')
})
application.post('/bio-data', (request, response) => {
    const { name, email, address, phoneNumber, profile } = request.body
    console.log(request.body);
    response.send('This is bio data')
})

application.listen(3000)