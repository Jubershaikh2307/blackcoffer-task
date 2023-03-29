const express = require('express');
const datamodel = require('../Models/data.modal');

let data = express()

data.get("/",async (req,res)=>{
    try {
        let arr = await datamodel.find()
        return res.send(arr)
    } catch (error) {
        console.log(error)
    }
})



module.exports = data