const {createNewUser, createAdminUser, admin} = require("./database")

const getUserDetailsController = (request, response) => {
    response.send('Hello World')
}
const createUserDetailsController = async (request, response) => {
    const data = request.body
    const userDetailsFromDb = await createNewUser(data)
    response.send('This is bio data')
}
const createAdminDetailsController = async (request, response) => {
    const data = request.body
    const adminDetailsFromDb = await createAdminUser(data)
    response.send('This is bio data')
}
const adminController = async (request, response) => {
    const data = request.body
    const adminDetailsFromDb = await admin(data)
    response.send('This is bio data')
}

module.exports = { getUserDetailsController, createUserDetailsController,createAdminDetailsController ,adminController} 