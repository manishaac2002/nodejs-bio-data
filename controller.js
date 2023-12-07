const createNewUser = require("./database")
const createUserDetailsDb = require("./database")

const getUserDetailsController =(request,response)=>{
    response.send('Hello World')
}
const createUserDetailsController =async(request,response)=>{
    const data    = request.body
    const profile_url = request.renamedFile
    const  userDetailsFromDb = await createNewUser(data,profile)
    response.send('This is bio data')
}

module.exports ={getUserDetailsController,createUserDetailsController} 