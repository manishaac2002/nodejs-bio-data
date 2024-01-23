const queryBuilder = () =>
{
    const query = 
    {
        column          : [],
        columnAndValue  : {},
        tableName       : "",
        condition       : []
    }

    function column (data)                  // pass all columns names
    {
        query.column = data  
        
        return { tableName }
    }
    
    function tableName (data)               // pass table Name
    {
        query.tableName = data
        
        return { columnAndValue, condition, selectBuild, deleteBuild }
    }

    function columnAndValue (data)          // pass both column and values
    {
        query.columnAndValue = data             
        
        return { condition, updateBuild, insertBuild }
    }
   
    function condition (column,arithmeticOPerator,value,logicalOperator)                // pass conditions
    {
        (query.condition).push([column,arithmeticOPerator,value,logicalOperator])

        return { condition, selectBuild, updateBuild, insertBuild, deleteBuild }
    }
   
    function where()
    {
        if((query.condition).length != 0)
        {
            result += ` WHERE `;
              
            count1  = 0;

            (query.condition).forEach((value1) =>
            { 
                count2 = 0;

                (value1).forEach((value2) =>
                {
                    count2++;
                    if((value2 == "null" ) && count2==4)
                    {
                        count1++;
                    }
                    else if(count2==3 && count1==0)
                    {
                        result += `"${value2}" `     
                    }
                    else if(count1==0)
                    result += `${value2} `     
                })  
            })                
        }
    }
    
    function selectBuild () 
    {
        flag    = 0 
        
        result  = "SELECT ";

        (query.column).forEach((value) =>
        {
            if(flag == 0)
            {
                result += `${value}` 
                flag++;
            }
            else
            result += `, ${value}` 
        })
        
        result  += ` FROM ${query.tableName}`
            
        where()
        
        return result
    }

    function deleteBuild()
    {    
        result  = `DELETE FROM ${query.tableName}`;
            
        where()
        
        return result
    }
    
    function updateBuild()
    {    
        flag = 0
        
        result  = `UPDATE ${query.tableName} SET `;
        
        for (value in query.columnAndValue) 
        {
            if(flag == 0)
            {
                result += `${value}=${query.columnAndValue[value]}` 
                flag++;
            }
            else                               
            result += `, ${value}=${query.columnAndValue[value]}` 
        }

        where()
        
        return result
    }
    
    function insertBuild()
    {    
        flag = 0
        
        result  = `INSERT INTO ${query.tableName} ( `;
        
        for (value in query.columnAndValue) 
        {
            if(flag == 0)
            {
                result += `${value}` 
                flag++;
            }
            else                               
            result += `, ${value}` 
        }
        
        result  += ` ) VALUES ( `;
        
        flag = 0; 

        for (value in query.columnAndValue) 
        {
            if(flag == 0)
            {
                result += `"${query.columnAndValue[value]}"` 
                flag++;
            }
            else                               
            result += `, "${query.columnAndValue[value]}"` 
        }
        
        result +=" )"
        
        return result
    }

    return { column , tableName }
} 

module.exports = { queryBuilder }

/*

const columnName = "name"
const arithmeticOPerator = "="
const values = "Rohit"
const logicalOperator = "null"

console.log();

const select  =  queryBuilder()
                .column(["h", "s"])
                .tableName('student')
                .condition(columnName, arithmeticOPerator, values, logicalOperator)
                .condition(columnName, arithmeticOPerator, values, logicalOperator)
                .selectBuild()

const deleted =  queryBuilder()
                .tableName('student')
                .condition(columnName, arithmeticOPerator, values, logicalOperator)
                .deleteBuild()

const update  =  queryBuilder()
                .tableName('student')
                .columnAndValue({name : "John", age : 21})
                .condition(columnName, arithmeticOPerator, values, logicalOperator)
                .updateBuild()

const insert  =  queryBuilder()
                .tableName('student')
                .columnAndValue({name : "John", age : 21})
                .insertBuild()

console.log(select);

console.log(insert);

console.log(update);

console.log(deleted);

console.log();


*/