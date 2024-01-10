const mongoose = require("mongoose")

const weatherSchema = new mongoose.Schema  ({
   
    city: {
        type : String,
        required: true,
    },
    temperature: {
        type: Number,
        required: true,
    },
    description: String,

})

module.exports = mongoose.model("Weather", weatherSchema)