const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = class DefaultController {
  static ShowFormRegister(req, res) {
    res.render('pages/register');
  }

  static Register(req, res) {}

  static ShowFormLogin(req, res) {
    res.render('pages/login');
  }

  static Login(req, res) {}

  static ShowHome(req, res) {
    if (!req.session.login) {
      res.redirect('/login');
    } else {
      res.render('pages/home');
    }
  }

  static NotFound(req, res) {
    res.render('pages/notFound');
  }
};
