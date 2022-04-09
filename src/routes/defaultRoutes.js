const express = require('express');
const router = express.Router();

const DefaultController = require('../controllers/DefaultController');

router.post('/register', DefaultController.Register);
router.get('/register', DefaultController.ShowFormRegister);

router.post('/login', DefaultController.Login);
router.get('/login', DefaultController.ShowFormLogin);

router.post('/', DefaultController.Login);
router.get('/', DefaultController.ShowHome);

router.get('/:strange-slug', DefaultController.NotFound);

module.exports = router;
