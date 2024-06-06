const express = require("express");
const app = express();
const router=require("./router/auth-router");

// middleware responsible to parse json data in request body
app.use(express.json());
app.use('/api/auth', router);

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server at port ${PORT}`);
})