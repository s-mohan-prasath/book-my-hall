import express from 'express';
import { ValidateAddVenue } from '../../../validate/venue.validate.js';
import { venueImgDir } from '../../../config/multer.image.config.js';
import { VenueModel } from '../../../models/allModels.js';

const Router = express.Router();
/**
 * Route    /venue
 * Des       add venues
 * Params    none
 * Access    private
 * Method    POST
 */

//send multipart form data
//TODO: work on creating image documentes in image collection and add the image id to the venue record
Router.post('/', venueImgDir.array('venue-images', 5), async (req, res) => {
  try {
    const venueData = JSON.parse(req.body.venueData);
    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ status: 'failed', message: 'No image files were uploaded.' });
    }
    await ValidateAddVenue(venueData);
    const uploadedImages = req.files.map((file) => file.filename);
    venueData.images = uploadedImages;
    const venue = await VenueModel.create(venueData);
    return res.json({
      status: 'success',
      message: 'Venue added successfully!',
      venue,
    });
  } catch (e) {
    // Handle errors
    return res.status(400).json({ status: 'failed', error: e.message });
  }
});

export default Router;
