const express = require("express")
const router = express.Router();

router.get('/doubts', async(req, res) =>
{
    res.send("Welcome To Doubts")

}
)

module.exports = router