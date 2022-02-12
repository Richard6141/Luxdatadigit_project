const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const tasksRoute = require('./routes/tasks');
const userRoute = require('./routes/user')
const roleRoute = require('./routes/role')

app.use(bodyParser.json());

app.use("/tasks", tasksRoute);
app.use("/user", userRoute);
app.use("/role", roleRoute);

module.exports = app;