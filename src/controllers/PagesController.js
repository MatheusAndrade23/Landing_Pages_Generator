const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = class PagesController {
  static Login(req, res) {
    User.findOne({ user: req.body.user }, (error, user) => {
      if (error) {
        res.status(500).json({ message: error });
      } else if (!user) {
        let NewUser = {
          user: req.body.user,
          password: req.body.password,
          pageSelected: 3,
        };
        User.create(NewUser);
        req.session.login = req.body.user;
        res.status(201).redirect('/');
      } else if (user.password === req.body.password) {
        req.session.login = req.body.user;
        res.status(200).redirect('/');
      } else {
        res.status(401).redirect('/');
      }
    });
  }

  static showHome(req, res) {
    if (!req.session.login) {
      res.render('pages/login');
    } else {
      res.render('pages/home');
    }
  }

  static notFound(req, res) {
    res.redirect('/');
  }
};
