import express from "express";
import passport from 'passport'
import { BookingModel } from "../../models/allModels.js";
import { ValidateNewBooking } from "../../validate/booking.validate.js";
import { isBookingAvailable } from './../../utils/db.js'

const Router = express.Router();

/**
 * Route    /booking
 * Des       get list of bookings
 * Params    none
 * Access    Private
 * Method    GET
 */
//TODO:work on the create new booking appi
Router.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        let user_id = req.user?.user_id
        let bookingData = req.body;
        await ValidateNewBooking(bookingData)
        if (isBookingAvailable((bookingData?.venue, bookingData?.event_start, bookingData?.event_end))==false){
            throw new Error("Booking slot unavailable in the given start and end time of the event")
        }
        bookingData.user = user_id;
        let booking = await BookingModel.create(bookingData)
        res.json({ message: "Booking created successfully...", booking })
    } catch (e) {
        return res.status(400).json({ status: "failed", error: e.message })
    }
})
Router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        let bookings = await BookingModel.find().populate("venue").populate("user")
        return res.json({ message: "bookings retrieved successfully", "bookings": bookings })
    } catch (error) {
        return res.status(404).json({ status: "failed", error: error.message });
    }
});

export default Router;
