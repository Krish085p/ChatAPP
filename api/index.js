const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const user = require('./models/User')
const cors = require('cors');
const { connectToDb } = require('./connection');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');

dotenv.config();
connectToDb();
const jwtSecret = process.env.JWT_SECRET;
exports.jwtSecret = jwtSecret;
const bcryptSalt = bcrypt.genSaltSync(10);
exports.bcryptSalt = bcryptSalt;

const app = express();
exports.app = app;
app.use(express.json());
app.use(cookieParser);

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,POST',
    credentials: true
    
}))

app.get('/test',(req,res)=>{
    res.json('test ok.')
});

app.get('/profile', (req,res)=>{
    const {token} = req.cookies?.token;
    if (token){
        jwt.verify(token, jwtSecret, {}, (err,userData));
        if (err) throw err;
        res.json(userData);
    }else{
        res.status(401).json('no token');
    }
    
});

app.post('/register', async (res, req) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
        const createdUser = await User.create({
            username: username,
            password: hashedPassword,
        });
        jwt.sign({ userId: userCreated._id }, jwtSecret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { sameSite: 'none' , secure: true}).status(201).json({
                _id: createdUser._id,
            });
        });
    } catch (err) {
        if (err) throw err;
        res.status(500).json('err');
    }
});

app.post('/login', async (req,res) => {
    try{
        const {username, password} = req.body;
        console.log(req.body);
        const foundUser = await User.findOne({username});
        if (foundUser) {
        const passOk = bcrypt.compareSync(password, foundUser.password);
        if (passOk) {
            jwt.sign({userId:foundUser._id,username}, jwtSecret, {}, (err, token) => {
            res.cookie('token', token, {sameSite:'none', secure:true}).json({
                id: foundUser._id,
            });
            });
        }
        }
    }catch (err){
        if (err)  throw err;
    }
  });

const server = app.listen(5000);

// MongoDb 
// Id: krishpatel085
// password: krish31620