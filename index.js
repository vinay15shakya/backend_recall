require('dotenv').config()



const express=require('express')

// or import express from "express"  same hi h


const app=express();

const port=3000

// app jo ki express ko mana gya h app se ek request send ki'
// gyi ki /me kuch bhi h to send karo
app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})

app.get('/login',(req,res)=>{
    res.send(`<h1>please log in</h1>`)
})

app.listen(process.env.port,()=>{
    console.log(`example app listening on port ${port}`)
})




/// ye to server bn gya

