const express = require('express');
const con = require('./config/connection');
const datamodel = require('./Models/data.modal');
const data = require('./Routes/data.routes');

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome")
})

// app.get("/all",async (req,res)=>{
//     let arr = await datamodel.find()
//     res.send(arr)
// })

app.use("/data",data)

app.listen(3001,()=>{
    try {
        con
        console.log("Successfull")
    } catch (error) {
        console.log(error)
    } 
})