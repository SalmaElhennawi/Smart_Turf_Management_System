const smartTurf = require("../data/smartTurfData");



const getNotifications = (req, res) => {

    res.json(

        smartTurf.notifications

    );

};



const addNotification = (req, res) => {

    const { message } = req.body;



    smartTurf.notifications.push(

        message

    );



    res.json({

        success: true,

        notifications: smartTurf.notifications

    });

};



module.exports = {

    getNotifications,

    addNotification

};