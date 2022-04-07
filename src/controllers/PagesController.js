const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = class PagesController {
  static Login(req, res) {}

  static showHome(req, res) {
    if (!req.session.login) {
      res.render('pages/login');
    } else {
    }
  }

  static notFound(req, res) {
    res.redirect('/');
  }
};
