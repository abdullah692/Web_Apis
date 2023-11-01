const express = require('express');
const { get } = require('mongoose');
const app = express();
require('./db/conn');
const StudentRouter=require('./routers/studentRouter')
const Student = require('./models/students')
const port = process.env.PORT || 3000;
//Express.json method use dto recognize the coming objects are JSON objects , also known as the middleware
//of the application
app.use(express.json());
app.use(StudentRouter);



app.listen(port, () => {
    console.log(`Port is running on port ${port}`);
})