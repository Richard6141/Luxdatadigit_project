const Validator = require("fastest-validator");
const res = require("express/lib/response");
const models = require("../models");
const User = require('../models').User;
const sequelize= require('sequelize');
function save(req, res) {
  const task = {
    userId: req.body.userId,
    taskName: req.body.taskName,
    description: req.body.description,
  };

  const schema = {
    userId: { type: "number", optional: false },
    taskName: { type: "string", optional: false, max: "255" },
    description: { type: "string", optional: false, max: "255" },
  };

  const v = new Validator();
  const validationResponse = v.validate(task, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed !",
      errors: validationResponse,
    });
  }

  models.Task.create(task)
    .then((result) => {
      res.status(201).json({
        message: "Task created successfully",
        Task: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

function show(req, res) {
  const id = req.params.id;
  models.Task.findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: "Task with this id doesn't found",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
}

function index(req, res) {
  models.Task.findAll({include:[{
    model: models.User,
  },
  {
    model: models.Chrono,
  },]})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error
      });
    });
}

function update(req, res) {
  const id = req.params.id;
  const updatedTask = {
    taskName: req.body.taskName,
  };
  userId = req.user.userId;

  const schema = {
    taskName: { type: "string", optional: false, max: "255" },
  };

  const v = new Validator();
  const validationResponse = v.validate(updatedTask, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed !",
      errors: validationResponse,
    });
  }

  models.Task.update(updatedTask, { where: { id: id, userId: userId } })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Task updated successfully !",
          Task: updatedTask,
        });
      } else {
        res.status(404).json({
          message: "Task with this id doesn't found",
        });
      }
    })
    .catch((error) => {
      res.status(200).json({
        message: "Something went wrong !",
        Task: error,
      });
    });
}

function destroy(req, res) {
  const id = req.params.id;
  const userId = req.user.userId;

  models.Task.destroy({ where: { id: id} })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Task deleted successfully",
        });
      } else {
        res.status(401).json({
          message: "Task with this id doesn't found !",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong !",
        error: error,
      });
    });
}

module.exports = {
  save: save,
  show: show,
  index: index,
  update: update,
  destroy: destroy,
};
