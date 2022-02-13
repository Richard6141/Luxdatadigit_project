const Validator = require("fastest-validator");
const res = require("express/lib/response");
const models = require("../models");

function setTime(req, res) {
  const worktime = {
    taskId: req.body.taskId,
    githubLink: req.body.githubLink,
    time: req.body.time,
  };

  models.Chrono.create(worktime)
    .then((result) => {
      res.status(201).json({
        message: "Task created successfully",
        worktime: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}


module.exports = {
  setTime: setTime,
};
