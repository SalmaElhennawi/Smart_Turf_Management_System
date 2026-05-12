const smartTurf = require("../data/smartTurfData");



const getMaintenance = (req, res) => {

    res.json(

        smartTurf.maintenance

    );

};



module.exports = {

    getMaintenance

};