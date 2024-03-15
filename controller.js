import db from "./database.js"

// get
const getUserDetailsController = (request, response) => {
    response.send('Hello World')
}

// post
const createUserDetailsController = async (request, response) => {
    const data = request.body
    const userDetailsFromDb = await db.createNewUser(data)
    response.send('This is bio data')
}

export default {
    getUserDetailsController,
    createUserDetailsController
} 