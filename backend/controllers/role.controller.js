const Validator = require("fastest-validator");
const res = require("express/lib/response");
const models = require("../models");

function createrole(req, res) {
  const role = {
    roleName: req.body.roleName,
  };

  const schema = {
    roleName: { type: "string", optional: false, max: "255" },
  };

  const v = new Validator();
  const validationResponse = v.validate(role, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed !",
      errors: validationResponse,
    });
  }

  models.Role.create(role)
    .then((result) => {
      res.status(201).json({
        message: "Task created successfully",
        Role: result,
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
  models.Role.findByPk(id)
    .then((result) => {
      //console.log(id)
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
  models.Role.findAll()
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
  const updatedRole = {
    roleName: req.body.roleName,
  };
  const schema = {
    roleName: { type: "string", optional: false, max: "255" },
  };

  const v = new Validator();
  const validationResponse = v.validate(updatedRole, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed !",
      errors: validationResponse,
    });
  }

  models.Role.update(updatedRole, { where: { id: id,} })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Role updated successfully !",
          Role: updatedRole,
        });
      } else {
        res.status(404).json({
          message: "Role with this id doesn't found",
        });
      }
    })
    .catch((error) => {
      res.status(200).json({
        message: "Something went wrong !",
        Role: error,
      });
    });
}



function destroy(req, res) {
  const id = req.params.id;
  // const userId = 2;

  models.Role.destroy({ where: { id: id } })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Role deleted successfully",
        });
      } else {
        res.status(401).json({
          message: "Role with this id doesn't found !",
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
  createrole: createrole,
  show: show,
  index: index,
  update: update,
  destroy: destroy,
};
