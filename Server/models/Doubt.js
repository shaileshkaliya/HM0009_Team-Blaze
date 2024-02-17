const mongoose = require("mongoose")
const { Schema } = mongoose

const DoubtSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user_doubt_asker'
    },
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        unique:true
    },
    date: {
        type: Date,
        default:Date.now
    },
})

module.exports=mongoose.model('doubt_schema',DoubtSchema)