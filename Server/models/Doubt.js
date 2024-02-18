const mongoose = require("mongoose")
const { Schema } = mongoose

const DoubtSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User_Doubt_Asker'
    },
    title: {
        type: String,
        required:true
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    
})

<<<<<<< HEAD
const doubt = mongoose.model('doubt_schema', DoubtSchema)
module.exports=doubt
=======
const Doubt = mongoose.model('doubt_schema', DoubtSchema)
module.exports=Doubt
>>>>>>> 8b836b920ad4785fce849ffdcfcbb9fbb55a11b8
