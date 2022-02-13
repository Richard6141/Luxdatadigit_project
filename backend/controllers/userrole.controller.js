const Validator = require("fastest-validator");
const res = require("express/lib/response");
const models = require("../models");

function setUserRole(req, res) {
  const userrole = {
    userId:req.user.userId,
    roleId: req.body.roleId,
  };

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
