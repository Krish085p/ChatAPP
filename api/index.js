const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const user = require('.models/User')

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET;

const app = express();

app.use(cors({
    Credentials: true,
    origin: process.env.CLIENT_URL;
}))

app.get('/test',(req,res)=>{
    res.json('test ok.')
});

app.post('/register', async (res,req)=>{
    const {username,password} = req.body;
    const userCreated = await User.create({username,password});
    jwt.sign({userId:userCreated. id}, jwtSecret).then((err,token) => {
        if (err) throw err;
        res.cookie('token',token).status(201).json('ok');
        
    });
    res.json
});

app.listen(4000);

// MongoDb 
// Id: krishpatel085
// password: krish31620