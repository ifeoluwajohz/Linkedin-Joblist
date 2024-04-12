const express = require('express');
const mongoose = require('mongoose')
const route = require('./route');
const app = express()
const cors = require('cors');


const PORT = 5000;
app.use(express.json());
app.use(cors())


const start = async() => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/index'),

    app.use(route);
    app.listen(PORT, ()=>{
        console.log(`localHost boot at port ${PORT}`);
    })

    }catch(error){
        console.log('Error in the server', error.message);
    }
    
};


start();
