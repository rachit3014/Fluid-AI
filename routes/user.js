const express=require('express');
const router=express.Router();
const {body}=require('express-validator')
const passport=require('passport');

const usercontroller=require('../controllers/user');
//  routes for the user sigUp 
router.post('/register',[body('email').trim().isEmail().withMessage('Invalid input email  '),body('password').notEmpty().withMessage('Invalid input value for field password ')],usercontroller.signUp);
// routes for the user signIn 
router.post('/login',[body('email').trim().isEmail().withMessage('Invalid input email'),body('password').notEmpty().withMessage("invalid input for passsword field")],usercontroller.signIn);

module.exports =router

