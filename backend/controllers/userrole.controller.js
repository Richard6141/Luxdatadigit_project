const Validator = require("fastest-validator");
const res = require("express/lib/response");
const models = require("../models");
// const User = require('../models').User;
// const sequelize= require('sequelize');

function setUserRole(req, res) {
  const userrole = {
    userId:req.user.userId,
    roleId: req.body.roleId,
  };

//   const schema = {
//     taskId: { type: "integer", optional: false },
//     githubLink: { type: "string", optional: false },
//     time: { type: "string", optional: false },
//   };

//   const v = new Validator();
//   const validationResponse = v.validate(worktime, schema);

//   if (validationResponse !== true) {
//     return res.status(400).json({
//       message: "Validation failed !",
//       errors: validationResponse,
//     });
//   }

  models.Userrole.create(userrole)
    .then((result) => {
      res.status(201).json({
        message: "Userrole created successfully",
        userrole: result,
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
  setUserRole:setUserRole
};
