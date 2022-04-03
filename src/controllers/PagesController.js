const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = class PagesController {
  static Login(req, res) {
    try {
      const user = User.findOne({ user: req.body.user });
      if (!user) {
        let NewUser = {
          user: req.body.user,
          password: req.body.password,
          pageSelected: 3,
        };
        Users.create(NewUser);
        req.session.login = req.body.user;
        res.status(201).redirect('/');
      } else {
        req.session.login = req.body.user;
        res.status(200).redirect('/');
      }
    } catch (error) {
      res.status(500).redirect('/');
    }
  }

  static showHome(req, res) {
    if (!req.session.login) {
      res.render('pages/Login');
    } else {
      res.render('pages/Home');
    }
  }
};
