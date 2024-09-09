const express = require("express");
const router = express.Router();
const Orders = require("../models/Orders");

router.post("/myorders", async (req, res) => {
  try {
    // Find the order by email
    let data = await Orders.findOne({ email: req.body.email });

    if (data) {
      // Flatten the data array
      const flattenedData = data.data.flat();

      // Send the flattened data as a response
      res.json({ data: flattenedData });
    } else {
      res.status(404).json({ message: "No orders found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
