const express = require("express")
const router = express.Router();
const User_Doubt_Solver=require("../models/User_Doubt_Solver")
const { query, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")

//Route 1 Create a user using POST "/api/doubt_solver/signup"
router.post('/signup',[
    // Validate name, username, email, and password fields
    query('name').notEmpty().withMessage('Name is required'),
    query('username').notEmpty().withMessage('Username is required'),
    query('email').isEmail().withMessage('Invalid email'),
    query('password').notEmpty().withMessage('Password is required'),
], async(req, res) =>
{
    // If there are error,return Bad request and the errors
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check whether tha email already exists

        let user = await User_Doubt_Solver.findOne({ email: req.body.email })

        if (user) {
            return res.status(400).json({ error: "User with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt)

        user = await User_Doubt_Solver.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: secPass,
        })

        const data = {
            user: {
                id: user.id
            }
        }

        console.log("Doubt Solver Signed in")
        res.json("Doubt Solver Signed in")
    }

    // Catch Errors
    catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }

}
)

router.post("/login",[
    query('email').isEmail().withMessage('Invalid email'),
    query('password').notEmpty().withMessage('Password is required')
], async(req,res)=>
{
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const { email, password } = req.body

    try {
        let user = await User_Doubt_Solver.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }
        const passwordcompare = await bcrypt.compare(password, user.password)
        if (!passwordcompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }

        console.log("Doubt Solver Logged in")
        res.json("Doubt Solver Logged in")

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")

    }

})




module.exports = router