import express from "express";

import { UserModel } from "../../models/allModels.js";
import { ValidateSignIn, ValidateSignUp } from "../../validate/auth.validate.js";

const Router = express.Router();

/**
 * Route    /signup
 * Des       create new authorised user
 * Params    none
 * Access    Public
 * Method    POST
 */
Router.post("/signup", async (req, res) => {
    let credentials = req.body;
    try {
        const { email, password, name, phoneNumber } = credentials;
        await ValidateSignUp(credentials);
        const user = await UserModel.findOne({ email });
        if (user) throw new Error("User Already Exists");
        const newUser = await UserModel.create({ email, password, name, phoneNumber });
        const token = newUser.generateJwtToken();
        return res.status(200).json({ status: "success",token });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

/**
 * Route    /signin
 * Des       Login to existing Account
 * Params    none
 * Access    Public
 * Method    POST
 */

Router.post("/signin", async (req, res) => {
    let credentials = req.body;
    try {
        await ValidateSignIn(credentials);
        const user = await UserModel.findByEmailAndPassword(credentials);
        const token = await user.generateJwtToken();
        res.status(200).json({ status: "success",token });
    } catch (error) {
        return res.status(400).json({ error: error.message, });
    }
});

export default Router;

// Getting Error ===> "error": "Cannot destructure property 'email' of 'undefined' as it is undefined."