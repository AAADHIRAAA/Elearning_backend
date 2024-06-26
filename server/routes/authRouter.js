const express = require('express');
const router= express.Router();

const authController = require('../controllers/authController');

router.post('/signup',authController.signUp);
router.post('/login', authController.login);
// router.post('/google-signin', authController.googleSignin);
router.post('/forgetPass',authController.forgotPassword);
router.post('/resetPass/:token', authController.resetPassword);
router.get('/verify-email/:email/:token', authController.verifyEmail);
// router.post('/verify-otp', authController.otpVerification);

module.exports = router;
