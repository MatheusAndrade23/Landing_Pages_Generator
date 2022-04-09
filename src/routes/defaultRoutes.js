const express = require('express');
const router = express.Router();

const DefaultController = require('../controllers/DefaultController');

router.post('/register', DefaultController.Register);
router.get('/register', DefaultController.Register);

router.post('/login', DefaultController.Login);
router.get('/login', DefaultController.Login);

router.get('/:strange', DefaultController.NotFound);

router.post('/', DefaultController.Login);
router.get('/', DefaultController.ShowHome);

module.exports = router;
