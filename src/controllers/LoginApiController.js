const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = class LoginController {
  static Login(req, res) {
    User.findOne({ user: req.body.user }, (error, user) => {
      if (error) {
        res.status(500).json({ message: error });
      } else if (!user) {
        res.status(401).json({ message: 'O Usuário não foi encontrado!' });
      } else if (user.password === req.body.password) {
        res.status(200).json({ message: 'Usuário autenticado com sucesso!' });
      } else {
        res.status(401).json({ message: 'Senha incorreta!' });
      }
    });
  }
};
