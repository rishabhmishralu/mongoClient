

const mongoClient=require("../database/connection")

const EmployeeEnrollment=async(req,res)=>{
     const EmployeeData=req.body
     try{
         const results= await mongoClient.insertToDb(EmployeeData);
     return res.send(results)
     }
    catch(err){
        console.log("something wrong")
    }
   return res.status(200).send({message:EmployeeData})
}



const EmployeeData= async(req,res)=>{
     const queryParams=req.query;
    // const queryParams={salary:{$gt:"10000"}}

    console.log(queryParams)
    try{
        const result =await mongoClient.FindInDb(queryParams)
        console.log(result)
        return res.status(200).send(result)
    }
    catch(error){
        console.log("somting went wrong");
        return res.status(500)
    }
}


const EmployeeUpdate= async(req,res)=>{
    const updateData=req.body;
    const filter=updateData.filter
    const value={$set:updateData.value}
    console.log(filter);
    console.log(value);
    try{
        const result =await mongoClient.updateIndb(filter,value)
        console.log(result)
        return res.status(200).send(result)
    }
    catch(error){
        console.log("somting went wrong");
        return res.status(500)
    }
}


const EmployeeDelete= async(req,res)=>{
    // const condition={"lastCompany":"Y"}
    const condition=req.query
    console.log(condition);
   
    try{
        const result =await mongoClient.deleteIndb(condition)
        console.log(result)
        return res.status(200).send(result)
    }
    catch(error){
        console.log("somting went wrong");
        return res.status(500)
    }
}

module.exports={
    EmployeeEnrollment,EmployeeData,EmployeeUpdate,EmployeeDelete
}