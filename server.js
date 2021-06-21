const express = require('express');
const app = express()

const mongoose = require('mongoose');
const cors = require('cors');
const getBooks = require('./controller/book.controller');
require('dotenv').config();

const seedUserData = require('./models/user.model')
const PORT = process.env.PORT;
app.use(cors()) 


mongoose.connect('mongodb://localhost:27017/myFavoritebooks',
{ useNewUrlParser: true, useUnifiedTopology: true }
);
seedUserData();

app.get('/',(req, res) => {

    res.send('Hello World') 
     })


app.get('/books', getBooks)

app.listen(PORT, () =>{
    console.log(`Server started on ${PORT}`);
});