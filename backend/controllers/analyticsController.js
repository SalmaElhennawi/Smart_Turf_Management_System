const smartTurf = require("../data/smartTurfData");



const getAnalytics = (req, res) => {

    res.json(

        smartTurf.analytics

    );

};



module.exports = {

    getAnalytics

};