const express = require('express')
const app =express()
const port = 5002
const connectdb =require('./config/db')
const userRoute=require('./routes/contactRoute')
app.use(express.json())
app.use('/contact',userRoute)

connectdb()



app.listen(port,err=>{(err)?
console.log(err):console.log(`this port :${port}`)})