const createNewUser = require("./database")
const createUserDetailsDb = require("./database")

const getUserDetailsController =(request,response)=>{
    response.send('Hello World')
}
const createUserDetailsController =async(request,response)=>{
    const data    = request.body
    console.log(data);
    const profileUrl = request.profileUrl
    const fileName = request.renamedFile
    const userDetailsFromDb = await createNewUser(data,profileUrl,fileName)
    response.send('This is bio data')
}

module.exports ={getUserDetailsController,createUserDetailsController} 