const express = require('express');
const path = require('path');
const userRouter = require('./routes/users.route');

const app = express();

app.use(express.json())//middleware
app.use(userRouter);


module.exports = app;