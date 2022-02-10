const express = require('express');
const app = express();

const tasksRoute = require('./routes/tasks');
app.use("/tasks", tasksRoute);

module.exports = app;