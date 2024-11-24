import express from "express";
import { BookingModel } from "../../models/allModels.js";

const Router = express.Router();

/**
 * Route    /signup
 * Des       create new authorised user
 * Params    none
 * Access    Public
 * Method    POST
 */
//TODO: WORK ON THE AUTH APIs
Router.post("/booking", async (req, res) => {
    try {

    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
});

export default Router;
