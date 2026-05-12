const express = require("express");

const router = express.Router();



const {

    getMaintenance

} = require("../controllers/maintenanceController");



router.get("/", getMaintenance);



module.exports = router;