const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');

router.post('/register', PagesController.Register);
router.get('/register', PagesController.ShowFormRegister);

router.post('/login', PagesController.Login);
router.get('/login', PagesController.ShowFormLogin);

router.post('/', PagesController.Login);
router.get('/', PagesController.showHome);

router.get('/:strange-slug', PagesController.notFound);

module.exports = router;
