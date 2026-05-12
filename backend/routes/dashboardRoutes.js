const express = require("express");

const router = express.Router();



const {

    getDashboard,

    updateWater

} = require("../controllers/dashboardController");



router.get("/", getDashboard);

router.post("/water", updateWater);



module.exports = router;