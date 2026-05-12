const express = require("express");

const cors = require("cors");



const dashboardRoutes = require(

    "./routes/dashboardRoutes"

);

const analyticsRoutes = require(

    "./routes/analyticsRoutes"

);

const notificationRoutes = require(

    "./routes/notificationRoutes"

);

const maintenanceRoutes = require(

    "./routes/maintenanceRoutes"

);



const app = express();

const PORT = 5000;



app.use(cors());

app.use(express.json());



/* =====================================================
   ROUTES
===================================================== */

app.use(

    "/api/dashboard",

    dashboardRoutes

);



app.use(

    "/api/analytics",

    analyticsRoutes

);



app.use(

    "/api/notifications",

    notificationRoutes

);



app.use(

    "/api/maintenance",

    maintenanceRoutes

);



/* =====================================================
   HOME
===================================================== */

app.get("/", (req, res) => {

    res.json({

        project: "Smart Turf Professional Backend",

        status: "Running"

    });

});



/* =====================================================
   SERVER
===================================================== */

app.listen(PORT, () => {

    console.log(

    `Server Running On http://localhost:${PORT}`

);

});
/* =====================================================
   LOGIN API
===================================================== */

app.post("/api/login",(req,res)=>{



    const { email,password } = req.body;



    /* LOGIN CHECK */

    if(

        email === "admin@gmail.com"

        &&

        password === "1234"

    ){



        res.json({

            success:true,

            message:"Login Success"

        });

    }

    else{



        res.json({

            success:false,

            message:"Invalid Email Or Password"

        });

    }

});