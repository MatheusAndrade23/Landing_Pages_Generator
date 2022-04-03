const express = require('express');
const router = express.Router();

const LandingPagesController = require('../controllers/LandingPagesController');
const PagesController = require('../controllers/PagesController');

router.get('/landing-pages', LandingPagesController.ShowLandingPage);
router.post('/', PagesController.Login);
router.get('/', PagesController.showHome);

module.exports = router;
