const express = require("express");
const router = express.Router();

router.post("/itemdata", (req, res) =>{
    try {
        res.send([global.ZearData, global.catagories]);
    } catch (error) {
        console.log(error);
          
    }
});
module.exports = router;