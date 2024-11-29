import express from 'express'
import passport from 'passport'
import {VenueModel} from '../../models/allModels.js'

const Router = express()

/**
 * Route    /venue
 * Des       get list of venues
 * Params    none
 * Access    private
 * Method    GET
 */

Router.get("/",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    try{
        let venues = await VenueModel.find()
        return res.json({venues,message:"venues retrieved successfully"}).status(200)
    }catch(e){
        res.status(400).json({error:e.message,status:"failed"})
    }
})

export default Router