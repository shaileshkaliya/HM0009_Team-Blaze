const express = require("express");
const router = express.Router();
const Doubt_Schema = require("../models/Doubt");
const User_Doubt_Asker = require("../models/User_Doubt_Asker");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");

router.post("/doubt", async (req, res) => {
    const { title, description, category, user } = req.body;

    let existingUser;

    try {
        existingUser = await User_Doubt_Asker.findById(user);
        if (!existingUser) {
            return res.status(400).json({ message: "No user found..." });
        }
    } catch (error) {
        console.error("Error finding user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }

    const doubt = new Doubt_Schema({
        title,
        description,
        category,
        user
    });

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await doubt.save({ session });
        existingUser.doubtsAsked.push(doubt);
        await existingUser.save({ session });
        await session.commitTransaction();
        session.endSession();
    } catch (error) {
        console.error("Transaction failed:", error);
        return res.status(500).json({ message: "Transaction failed" });
    }

    return res.status(200).json({ doubt });
});


module.exports = router;
