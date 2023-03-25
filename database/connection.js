const {MongoClient}=require('mongodb')

const url ="mongodb://127.0.0.1:27017"
const client=new MongoClient(url)

const insertToDb=async(data)=>{
    const database=client.db("Human_resource_2")
    const collection=database.collection("employee")
   await client.connect();
    const dbResponse=await collection.insertOne(data)
   await client.close();
    return dbResponse;
}


const FindInDb=async(query)=>{
   try {
        const database=client.db("Human_resource_2")
    const collection=database.collection("employee")
   await client.connect();
    const dbResponse=await collection.find(query).toArray()
   await client.close();
    return dbResponse;
}
catch(error){
    return error.message;
}
}


const updateIndb=async(filterCond,value)=>{
    try {
         const database=client.db("Human_resource_2")
     const collection=database.collection("employee")
    await client.connect();
     const dbResponse=await collection.updateOne(filterCond,value)
    await client.close();
     return dbResponse;
 }
 catch(error){
     return error.message;
 }
}


const deleteIndb=async(filterCond)=>{
    try {
         const database=client.db("Human_resource_2")
     const collection=database.collection("employee")
    await client.connect();
     const dbResponse=await collection.deleteMany(filterCond)
    await client.close();
     return dbResponse;
 }
 catch(error){
     return error.message;
 }
}




module.exports={
    insertToDb,FindInDb,updateIndb,deleteIndb
}