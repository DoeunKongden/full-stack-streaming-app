const express = require ('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')

dotenv.config()


const app = express();

app.listen(3000,()=>{
    console.log("Backend is running")
})

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log("Connectionm DB successfull"))
.catch((err)=>console.log(err))

app.use("/api/auth",authRoute)
