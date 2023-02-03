const express = require('express');
const userController = require('../controllers/userController');


const router = express.Router()

router.route('/signup').post(userController.registerNewUser)
router.route('/login').post(userController.authenticateUser)

module.exports= router