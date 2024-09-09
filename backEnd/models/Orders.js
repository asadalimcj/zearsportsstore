const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    data: [
        {
            data: {
                type: Array, // Adjust the type based on what kind of data you're storing
                required: true,
            },
            date: {
                type: Date,
                required: true,
            }
        }
    ]
});

module.exports = mongoose.model("OrderData", OrderSchema);
