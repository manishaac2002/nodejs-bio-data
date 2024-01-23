const createNewUser = require("./database")
const createUserDetailsDb = require("./database")
const orm = require("./orm")

const query = orm.queryBuilder()
const getUserDetailsController =(request,response)=>{
    response.send('Hello World')
}
const createUserDetailsController =async(request,response)=>{

    const data  =  query.tableName('newTable')
                  .columnAndValue({email : "srohith10012002@gmail.com", pass : "1234", name : "John", age : 21, })
                  .insertBuild() 
    
    const userDetailsFromDb = await createNewUser(data)
    
    response.send('This is bio data')
}

module.exports ={getUserDetailsController,createUserDetailsController} 