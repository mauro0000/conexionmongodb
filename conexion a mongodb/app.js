require('dotenv').config();
const express = require('express');
const app = express();


const mongoose = require('mongoose');

(async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('Estas conectado a mongodb')
    }catch(error){
        console.log(error);
    }
})()


//luego iniciar el servidor
module.exports= app;