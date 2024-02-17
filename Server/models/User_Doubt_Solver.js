const mongoose = require("mongoose")
const {Schema}=mongoose

const User_Doubt_Solver_Schema =new Schema( {
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required:true
    },
})

const User_Doubt_Solver = mongoose.model('doubt_solver', User_Doubt_Solver_Schema)
module.exports = User_Doubt_Solver