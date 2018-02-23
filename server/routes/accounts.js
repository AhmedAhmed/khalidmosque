const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const User = require("../models/users");
const config = require("../../config");

module.exports = function( server ){

  //routes go here.
  server.get("/api/users", (req, res, next) => {
    res.json({
      status: 301,
      users: [],
      messages: "Available Routes -> /api/users/:id, /api/users/create, /api/users/:id/delete"
    });
  });

  server.get("/api/users/:id", (req, res, next) => {
    res.json({
      status: 200,
      params: req.params
    });
  });

  server.post("/api/users/create", (req, res, next) => {

    const name = req.params.name,
          username = req.params.username,
          email = req.params.email,
          password = req.params.password,
          salt = bcrypt.genSaltSync(10),
          passHash = bcrypt.hashSync(password, salt),
          roles = "user";

    //check if parameters are empty.
    if( name.trim() != "" && 
        username.trim() != "" && 
        email.trim() != "" && 
        password.trim() != ""){

      const params = {
        name,
        username,
        email,
        password: passHash,
        salt,
        roles
      }

      User.findOne({
        $and: [
          { $or: [{ username }] },
          { $or: [{ email }] }
        ]
      }).then(user => {
        const userInstance = new User(params);
        if(!user){
          userInstance.save(function (err, data) {
            if (err) {
              res.json({ status: 500, message: "Internal Server Error" });
            }

            res.json({
              status: 200,
              message: "User Registered Successfully",
              data: params
            });
          });
        } else {
          res.json({
            status: 500,
            message: "User already has that email or username. Try again.",
            data: params
          });
        }
      });

    } else {
      res.json({
        status: 500,
        message: "not saved"
      });
    }
  });

  server.post("/api/users/:id/delete", (req, res, next) => {
    res.json({
      status: 200,
      id: req.params.id,
      messages: "Delete user from table with id => " + req.params.id
    });
  });

  // Authentication
  server.post("/api/auth", ( req, res, next ) => {
    const username = req.params.username,
          password = req.params.password;

    //find the user.
    User.findOne({
      username
    }).then(user => {
      //perform hash on pass.
      if( user ){
        //now do the hashing and check password.
        const passHash = bcrypt.hashSync(password, user.salt);
        if( user.password == passHash ){
          //password correct now create token and send it back as json.
          user = user.toJSON();
          delete user.password;
          delete user.salt;
          const token = jwt.sign( user, config.secret );
          res.json({
            status: 200,
            message: "Login successfull",
            token,
            user
          });
        }
      } else {
        res.json({
          status: 404,
          message: "Username is incorrect"
        });
      }
      res.json({
        status: 404,
        message: "Username is incorrect"
      });
    });
  });

  server.post("/api/presence", (req, res, next) => {
    const user = req.params.token != null? jwt.verify(req.params.token, config.secret):null;

    if(user != null){
      res.json({
        message: "Reauthenticated",
        isLoggedIn: true,
        user
      });
    } else {
      res.json({
        message: "Login again"
      });
    }
  });

}
