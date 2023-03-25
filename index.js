const express= require("express")
const studentRouter=require("./router/student")
const app=express();


app.use(express.json())



app.use(studentRouter)

app.listen(5001,()=>{
    console.log("port is working on 5001")
})