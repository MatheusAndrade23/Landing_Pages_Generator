const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = class LoginApiController {
  static Login(req, res) {
    if (!req.body.user || !req.body.password) {
      res
        .status(406)
        .json({ message: 'Without User or Password', code: 'WHP1' });
    } else {
      User.findOne({ user: req.body.user }, (error, user) => {
        if (error) {
          res
            .status(500)
            .json({ message: 'Internal Server Error!', code: 'ISE1' });
        } else if (user) {
          if (req.body.password === user.password) {
            res.status(200).json({ message: 'Success', code: 'LRS1' });
          } else {
            res.status(401).json({ message: 'Wrong Password', code: 'WPU1' });
          }
        } else {
          res.status(406).json({ message: 'User not Found', code: 'UNF1' });
        }
      });
    }
  }

  static Register(req, res) {
    if (!req.body.user || !req.body.password) {
      res.status(406).json({ message: 'Without User or Password' });
    } else {
      User.findOne({ user: req.body.user }, (error, user) => {
        if (error) {
          res
            .status(500)
            .json({ message: 'Internal Server Error!', code: 'ISE1' });
        } else if (user) {
          res
            .status(406)
            .json({ message: 'This User already Exists', code: 'TUE1' });
        } else {
          let NewUser = {
            user: req.body.user,
            password: req.body.password,
            pageSelected: 3,
          };
          try {
            User.crate(NewUser);
            res
              .status(201)
              .json({ message: 'User Created with Success!', code: 'LRS2' });
          } catch (error) {
            res.status(500).json({
              message: 'Internal Server Error while Creating User!',
              code: 'ISE2',
            });
          }
        }
      });
    }
  }
};
