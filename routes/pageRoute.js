const express= require('express')
const pageController = require('../controllers/pageController')


const router = express.Router()

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/register').get(pageController.getRegisterPage);
router.route('/login').get(pageController.getLoginPage);
router.route('/dashboard').get(pageController.getDashboardPage);
router.route('/course-single').get(pageController.getCourseSinglePage)

module.exports = router