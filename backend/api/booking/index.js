import express from "express";
import passport from 'passport'
import { BookingModel } from "../../models/allModels.js";

const Router = express.Router();

/**
 * Route    /booking
 * Des       create new booking
 * Params    none
 * Access    Private
 * Method    POST
 */
Router.post("/booking", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        let bookings = await BookingModel.find()
        return res.json({ message: "bookings retrieved successfully", "bookings": bookings })
    } catch (error) {
        return res.status(404).json({ status: "failed", error: error.message });
    }
});

export default Router;
