import express from 'express'
import mongoose from 'mongoose'
import { UserModel } from './models/user/index.js'
import dotenv from "dotenv"

dotenv.config()
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        message:"coming"
    })
})





let PORT = 5000
app.listen(PORT,()=>{
    mongoose.connect(process.env.MONGO_URI)
    console.log("Server is listening on "+PORT)
})