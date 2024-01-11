const {createNewUser} = require("./database")

// get
const getUserDetailsController = (request, response) => {
    response.send('Hello World')
}

// post
const createUserDetailsController = async (request, response) => {
    const data = request.body
   
    const userDetailsFromDb = await createNewUser(data)
    response.send('This is bio data')
}

module.exports = { getUserDetailsController, createUserDetailsController } 