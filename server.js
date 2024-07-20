require('dotenv').config();
const express = require("express");
const app = express();
const authRoute=require("./router/auth-router");
const connectDb=require('./utils/db');
const serviceRouter = require('./router/service-router');
const errorMiddleware = require('./middlewares/error-middleware');
const contactRoute = require('./router/contact-router');
const additionalRoute = require('./router/user-router');

// middleware responsible to parse json data in request body
app.use(express.json());
app.use('/api/auth', authRoute);
app.use("/api/form", contactRoute);
app.use('user/form', additionalRoute);
app.use("/api/data", serviceRouter);

app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server at port ${PORT}`);
    });
});
