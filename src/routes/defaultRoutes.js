const express = require('express');
const router = express.Router();

const LoginApiController = require('../controllers/LoginApiController');
const DefaultController = require('../controllers/DefaultController');
const ApiController = require('../controllers/ApiController');

router.post('/landing-pages', ApiController.LandingPages);

router.post('/register-api', LoginApiController.Register);
router.post('/login-api', LoginApiController.Login);

router.post('/register', DefaultController.Register);
router.get('/register', DefaultController.Register);

router.post('/login', DefaultController.Login);
router.get('/login', DefaultController.Login);

router.post('/apply-page', DefaultController.ApplyPage);

router.get('/:strange', DefaultController.NotFound);

router.get('/', DefaultController.ShowHome);

module.exports = router;
