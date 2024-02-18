const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const doubt = require("../models/Doubt");
const User_Doubt_Asker = require("../models/User_Doubt_Asker");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");

router.post("/doubt", async (req, res) => {
    const { title, description, category, user } = req.body;

    let existingUser;
=======
const Doubt = require("../models/Doubt");
const User_Doubt_Asker =require("../models/User_Doubt_Asker")
>>>>>>> 8b836b920ad4785fce849ffdcfcbb9fbb55a11b8

//Route 1 Create a user using POST "/api/doubt_solver/signup"
router.post('/doubt'
, async (req, res) => {
    try {
        const { user, title, description, category } = req.body;
        
        const existingUser = await User_Doubt_Asker.findById(user);
        if (existingUser) {
            const newDoubt = await Doubt.create({
                user: user, // Make sure user ID is provided in the request body
                title: title,
                description: description,
                category: category
            });

            // Add the doubt ID to the doubtsAsked array of the user
            existingUser.doubtsAsked.push(newDoubt._id);
            
            // Save the updated user document
            await existingUser.save();

            // If the user exists and the doubt is saved successfully
            return res.status(200).json({ message: "Doubt saved successfully.", doubt: newDoubt });
        }

        else
        {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }


    }

<<<<<<< HEAD
    const doubt = new doubt({
        title,
        description,
        category,
        user
    });

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await doubt.save({ session });
        res.json("done")
        existingUser.doubtsAsked.push(doubt);
        await existingUser.save({ session });
        await session.commitTransaction();
        session.endSession();
    } catch (error) {
        console.error("Transaction failed:", error);
        return res.status(500).json({ message: "Transaction failed" });
=======
    // Catch Errors
    catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
>>>>>>> 8b836b920ad4785fce849ffdcfcbb9fbb55a11b8
    }

}
)

module.exports = router;
