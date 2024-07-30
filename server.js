require('dotenv').config();
const express = require("express");
const cors=require("cors");
const app = express();
const authRoute=require("./router/auth-router");
const connectDb=require('./utils/db');
const serviceRoute = require('./router/service-router');
const errorMiddleware = require('./middlewares/error-middleware');
const contactRoute = require('./router/contact-router');
<<<<<<< HEAD
const additionalRoute = require('./router/user-router');
=======
const additionalRoute = require("./router/user-router");
<<<<<<< HEAD
const adminRoute = require("./router/admin-router");
=======
>>>>>>> 6ac237344a1f598e38244a546534a1bcc0191989
>>>>>>> 45123d2068ff141363d2a87369ab6b472a5c05b0


// handling cors
const corsOptions={
    origin:"*" ,
    method: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
// middleware responsible to parse json data in request body
app.use(express.json());
app.use('/api/auth', authRoute);
app.use("/api/form", contactRoute);
<<<<<<< HEAD
app.use('user/form', additionalRoute);
app.use("/api/data", serviceRoute);
=======
app.use('/user/form', additionalRoute);
<<<<<<< HEAD
app.use("/api/admin", adminRoute);
=======
>>>>>>> 6ac237344a1f598e38244a546534a1bcc0191989
>>>>>>> 45123d2068ff141363d2a87369ab6b472a5c05b0

app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server at port ${PORT}`);
    });
});
