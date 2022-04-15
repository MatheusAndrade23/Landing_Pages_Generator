const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = class DefaultController {
  static ApplyPage(req, res) {
    let pageSelected = parseInt(req.body.defaultPage);

    if (pageSelected) {
      User.findOneAndUpdate(
        { user: req.session.login },
        { pageSelected: pageSelected },
        (error, user) => {
          if (error) {
            res.status(500).redirect('/');
          } else {
            res.status(200).redirect('/');
          }
        },
      );
    } else {
      res.status(406).redirect('/');
    }
  }

  static ShowHome(req, res) {
    if (req.session.login) {
      res.render('pages/home');
    } else {
      res.redirect('/login');
    }
  }

  static Login(req, res) {
    if (req.method === 'GET') {
      if (req.session.login) {
        res.redirect('/');
      } else {
        res.status(406).render('pages/login');
      }
    } else if (req.method === 'POST') {
      if (!req.body.user || !req.body.password) {
        res.status(406).render('pages/login');
      } else {
        User.findOne({ user: req.body.user }, (error, user) => {
          if (error) {
            res.status(500).render('pages/login');
          } else if (user) {
            if (req.body.password === user.password) {
              req.session.login = req.body.user;
              res.status(200).redirect('/');
            } else {
              res.status(401).render('pages/login');
            }
          } else {
            res.status(406).render('pages/login');
          }
        });
      }
    }
  }

  static Register(req, res) {
    if (req.method === 'GET') {
      res.render('pages/register');
    } else if (req.method === 'POST') {
      if (!req.body.user || !req.body.password) {
        res.status(406).redirect('/register');
      } else {
        User.findOne({ user: req.body.user }, (error, user) => {
          if (error) {
            res.status(500).render('pages/register');
          } else if (user) {
            res.status(406).render('pages/register');
          } else {
            let NewUser = {
              user: req.body.user,
              password: req.body.password,
              pageSelected: 3,
            };
            try {
              User.create(NewUser);
              req.session.login = req.body.user;
              res.status(201).redirect('/');
            } catch (error) {
              res.status(500).redirect('/register');
            }
          }
        });
      }
    }
  }

  static NotFound(req, res) {
    res.render('pages/notFound');
  }
};
