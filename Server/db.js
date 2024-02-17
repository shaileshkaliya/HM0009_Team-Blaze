const mongoose = require("mongoose")
const mongoURI = "mongodb://localhost:27017/mentor"

const connectionParams = {
    useNewUrlparser: true,
    useUnifiedTopology:true
}

const connectToMongo = () =>
{
    mongoose.connect(mongoURI).then(() => {
        console.info("Connected to DB");
    })
        .catch((e) => {
            console.log("Error:", e);
        });
}

module.exports = connectToMongo