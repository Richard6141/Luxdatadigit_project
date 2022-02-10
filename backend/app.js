const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const tasksRoute = require('./routes/tasks');

app.use(bodyParser.json());
app.use("/tasks", tasksRoute);

module.exports = app;