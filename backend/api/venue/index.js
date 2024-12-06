import express from 'express'
import passport from 'passport'
import { VenueModel } from '../../models/allModels.js'

const Router = express()

/**
 * Route    /venue
 * Des       get list of venues
 * Params    none
 * Access    private
 * Method    GET
 */

// Router.get("/",passport.authenticate("jwt",{session:false}),async(req,res)=>{
//     try{
//         let venues = await VenueModel.find().populate("image")
//         return res.json({venues,message:"venues retrieved successfully"}).status(200)
//     }catch(e){
//         res.status(400).json({error:e.message,status:"failed"})
//     }
// })

// export default Router
Router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        // Fetch venues and populate the `image` field (it’s an array of images)
        const venues = await VenueModel.find().populate('image');

        // Map and format response data
        const updatedVenues = venues.map((venue) => ({
            id: venue._id,
            name: venue.name || 'No Name',
            address: venue.address || 'Not Specified', // Address field
            seating_capacity: venue.seating_capacity || 'Unknown',
            // Ensure we are accessing the first image in the image array
            image: venue.image && venue.image.images.length > 0 ? venue.image.images[0].url : null,
        }));

        return res.status(200).json({ venues: updatedVenues, message: 'Venues retrieved successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message, status: 'failed' });
    }
});

export default Router
