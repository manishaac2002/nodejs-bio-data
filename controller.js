const createUserDetailsDb = require("./database")

const getUserDetailsController =(request,response)=>{
    response.send('Hello World')
}
const createUserDetailsController =async(request,response)=>{
    const data =request.body
    const  userDetailsFromDb = await createUserDetailsDb(data)
    response.send('This is bio data')
}

module.exports ={getUserDetailsController,createUserDetailsController} 