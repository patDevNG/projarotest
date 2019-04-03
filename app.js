const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(morgan())
app.get('/',(req,res)=>{
    res.send('Welcome to our test app');
})
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server Statrted at Port: ${PORT}`);
    
});

