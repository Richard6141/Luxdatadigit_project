const models = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Validator = require("fastest-validator");
const User = require('../models').Task;


function singUp(req, res) {
  models.User.findOne({ where: { email: req.body.email } })
    .then((result) => {
      if (result) {
        res.status(409).json({
          message: "Email already exixts !",
          error: error,
        });
      } else {
        bcryptjs.genSalt(10, function (err, salt) {
          bcryptjs.hash(req.body.password, salt, function (err, hash) {
            const user = {
              name: req.body.name,
              surname: req.body.surname,
              email: req.body.email,
              password: hash,
              nationality: req.body.nationality,
              birthday: req.body.birthday,
              speciality: req.body.speciality,
            };

            const schema = {
              name: { type: "string", optional: false, max: "50" },
              surname: { type: "string", optional: false, max: "50" },
              email: { type: "string", optional: false },
              password: { type: "string", optional: false },
              nationality: { type: "string", optional: false, max: "50" },
              birthday: { type: "string", optional: false },
              speciality: { type: "string", optional: false, max: "50" },
            };
            const v = new Validator();
            const validationResponse = v.validate(user, schema);

            if (validationResponse !== true) {
              return res.status(400).json({
                message: "Validation failed !",
                errors: validationResponse,
              });
            }

            models.User.create(user)
              .then((result) => {
                res.status(201).json({
                  message: "User created successfully",
                  User: result,
                });
              })
              .catch((error) => {
                res.status(500).json({
                  message: "Something went wrong !",
                  error: error,
                });
              });
          });
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

function logIn(req, res){
    models.User.findOne({where:{email: req.body.email}}).then(user =>{
        if(user === null){
            res.status(401).json({
                message: "Bad credentilas !"
            })
        }else{
            bcryptjs.compare(req.body.password, user.password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id,
                    }, process.env.JWT_KEY, function(err, token){
                        res.status(200).json({
                            message: "Authentificate successful !",
                            token:token,
                            decoc : jwt.decode(token).userId 
                        })
                    })
                }else{
                    res.status(401).json({
                        message: "Bad credentilas !"
                    })
                        }
            })
        } 
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong !"
        })
    })
}

function allusers(req, res) {
  models.User.findAll({include:[{
    model: models.Task,
  }]})
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

function show(req, res) {
  const id = req.params.id;
  models.User.findByPk(id)
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

// function logout(req, res){
//   const token = req.headers.authorization.split(" ")[1]
//   const existtoken = jwt.existtoken(token)
//   if (existtoken){
//     jwt.destroy(token)
//   }else{
//     res.status(401).json({
//       message: "User is not connected !"
//     })
//   }
// }

function destroy(req, res) {
  const id = req.params.id;
  // const userId = req.user.userId;

  models.User.destroy({ where: { id: id} })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "User deleted successfully",
        });
      } else {
        res.status(401).json({
          message: "User with this id doesn't found !",
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

function userupdate(req, res) {
  const id = req.params.id;
  const is_exist = models.User.find(c.id ===parseInt(id));
  if(!is_exist) res.status(404).send("The user with this id deoesn't exist !")

    bcryptjs.genSalt(10, function (err, salt) {
      bcryptjs.hash(req.body.password, salt, function (err, hash) {
        const usertoupdate = {
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
          password: hash,
          nationality: req.body.nationality,
          birthday: req.body.birthday,
          speciality: req.body.speciality,
        };

        const schema = {
          name: { type: "string", optional: false, max: "50" },
          surname: { type: "string", optional: false, max: "50" },
          email: { type: "string", optional: false },
          password: { type: "string", optional: false },
          nationality: { type: "string", optional: false, max: "50" },
          birthday: { type: "string", optional: false },
          speciality: { type: "string", optional: false, max: "50" },
        };
        const v = new Validator();
        const validationResponse = v.validate(usertoupdate, schema);

        if (validationResponse !== true) {
          return res.status(400).json({
            message: "Validation failed !",
            errors: validationResponse,
          });
        }

        models.User.create(usertoupdate)
          .then((result) => {
            res.status(201).json({
              message: "User created successfully",
              User: result,
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: "Something went wrong !",
              error: error,
            });
          });
      });
    });
  }




module.exports = {
  singUp: singUp,
  logIn:logIn,
  allusers:allusers,
  show:show,
  // logout:logout, 
  destroy: destroy,
  userupdate: userupdate

};
