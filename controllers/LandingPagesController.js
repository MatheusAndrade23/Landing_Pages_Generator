const mongoose = require('mongoose');
const User = require('../models/user');

const MockPage = require('../pages/mock.json');

module.exports = class LandingPagesController {
  static ShowLandingPage(req, res) {
    User.findOne({ user: req.body.user }, (error, user) => {
      if (error) {
        res.status(500).json({ message: error });
      } else if (!user) {
        res.status(401).json({ message: 'O Usuário não foi encontrado!' });
      } else if (user.password === req.body.password) {
        switch (user.pageSelected) {
          case 1:
            res.status(200).json({ page: 'INSERIR A PÁGINA AQUI' });
            break;

          case 2:
            res.status(200).json({ page: 'INSERIR A PÁGINA AQUI' });
            break;

          case 3:
            res.status(200).json({ MockPage });
            break;

          case 4:
            res.status(200).json({ page: 'INSERIR A PÁGINA AQUI' });
            break;

          case 5:
            res.status(200).json({ page: 'INSERIR A PÁGINA AQUI' });
            break;

          case 6:
            res.status(200).json({ page: 'INSERIR A PÁGINA AQUI' });
            break;

          case 7:
            res.status(200).json({ page: 'INSERIR A PÁGINA AQUI' });
            break;

          case 8:
            res.status(200).json({ page: 'INSERIR A PÁGINA AQUI' });
            break;

          case 9:
            res.status(200).json({ page: 'INSERIR A PÁGINA AQUI' });
            break;

          default:
            res.status(500);
            break;
        }
      } else {
        res.status(401).json({ message: 'Senha incorreta!' });
      }
    });
  }
};
