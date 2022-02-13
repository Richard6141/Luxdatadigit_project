const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const tasksRoute = require('./routes/tasks');
const userRoute = require('./routes/user')
const roleRoute = require('./routes/role')
const chronoRoute = require('./routes/chrono')
const userroleRoute = require('./routes/userrole')

app.use(bodyParser.json());

app.use("/tasks", tasksRoute);
app.use("/user", userRoute);
app.use("/role", roleRoute);
app.use("/chrono", chronoRoute);
app.use("/userrole", userroleRoute);

module.exports = app;