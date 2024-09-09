const express = require("express");
const router = express.Router();
const Orders = require("../models/Orders");

router.post("/orders", async (req, res) => {
    const orderData = {
        data: req.body.data,
        date: new Date() // Current date
    };

    try {
        let emailRecord = await Orders.findOne({ email: req.body.email });
        if (!emailRecord) {
            const newOrder = new Orders({
                email: req.body.email,
                data: [orderData], // Add the order object to the array
            });
            await newOrder.save();
            res.json({ success: true });
        } else {
            await Orders.findOneAndUpdate(
                { email: req.body.email },
                { $push: { data: orderData } } // Push the new order object to the array
            );
            res.json({ success: true });
        }
    } catch (error) {
        console.error("Error processing order:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
