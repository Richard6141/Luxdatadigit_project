const res = require("express/lib/response");
const models = require("../models");
function save(req, res) {
  const task = {
    userId: 1,
    taskName: req.body.taskName,
  };
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
  models.Task.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
}

function update(req, res) {
  const id = req.params.id;
  const updatedTask = {
    taskName: req.body.taskName,
  };
  const userId = 1;

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
  const userId = 1;

  models.Task.destroy({ where: { id: id, userId: userId } })
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
