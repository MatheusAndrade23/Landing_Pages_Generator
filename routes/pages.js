const express = require('express');
const router = express.Router();

const LandingPagesController = require('../controllers/LandingPagesController');
const PagesController = require('../controllers/PagesController');
const LoginApiController = require('../controllers/LoginApiController');

router.get('/landing-pages', LandingPagesController.ShowLandingPage);
router.post('/login', LoginApiController.Login);
router.post('/', PagesController.Login);
router.get('/', PagesController.showHome);
router.get('/:strange-slug', PagesController.notFound);

module.exports = router;
