const smartTurf = require("../data/smartTurfData");



const getDashboard = (req, res) => {

    res.json(

        smartTurf.dashboard

    );

};



const updateWater = (req, res) => {

    const { level } = req.body;



    smartTurf.dashboard.waterLevel = level;



    res.json({

        success: true,

        waterLevel: level

    });

};



module.exports = {

    getDashboard,

    updateWater

};