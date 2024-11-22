import express from 'express'
import mongoose from 'mongoose'
import { UserModel, VenueModel, ImageModel, BookingModel, AdvanceBookingModel } from './models/allModels.js'
import passport from 'passport'

import dotenv from "dotenv"
import session from 'express-session'

dotenv.config()
const app = express()

app.use(express.json())
app.use(session({secret:process.env.APP_SECRET}))
app.use(passport.initialize())
app.use(passport.session())


app.get("/", (req, res) => {
    res.json({
        message: "coming"
    })
})





let PORT = 5000
app.listen(PORT, () => {
    mongoose.connect(process.env.MONGO_URI).then(() => console.log("connected to database", (error) => console.log("DATABASE CONNECTION ERROR : " + error.message)))
    console.log("Server is listening on " + PORT)
})