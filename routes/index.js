const express = require('express');
const router=express.Router();
router.use('/user',require('../routes/user'));
router.use('/task',require('../routes/task'));


module.exports =router;