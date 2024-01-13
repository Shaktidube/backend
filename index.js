require('dotenv').config()
const express = require('express') //it used in Module JS
//import express from "express" //it used in Common JS
const app = express()
const port = 3000

app.get('/' ,(req,res)=>{
    res.send("/ page is Runing")
})

app.get('/register',(req,res)=>{
    res.send('<label>Username :</label><input type="text"/><br><label>Email :</label><input type="email"/><br><label>password :</label><input type="password"/><br><label>Confirm Password :</label><input type="password"/><br><button>REGISTER</button>')
})

app.get('/login',(req,res)=>{
    res.send('<label>Username :</label><input type="text"/><br><label>Password :</label><input type="password"/><br><button>LOGIN</button>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listing on port number ${port}`);
})