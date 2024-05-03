const express=require('express');
const {body}=require('express-validator')
const passport = require('passport');
const router=express.Router();
const taskcontroller=require('../controllers/task');

//  routes for getting all tasks of the user
router.get('/',passport.authenticate('jwt',{session:false}),taskcontroller.get_all_tasks);

//  routes for creating tasks
router.post('/create',[body('title').notEmpty().withMessage('Invalid input value for field title '),
body('description').notEmpty().withMessage('Invalid input value for field description '),
body('status').notEmpty().withMessage('Please enter valid status e.g. completed, pending, in progress')
],passport.authenticate('jwt',{session:false}),taskcontroller.create_task);

//  routes for getting tasks by id
router.get('/:id',passport.authenticate('jwt',{session:false}),taskcontroller.get_task_by_id);

// routes for updating tasks
router.put('/update/:id',[body('status').notEmpty().withMessage('Please enter valid status e.g. completed, pending, in progress')],passport.authenticate('jwt',{session:false}),taskcontroller.update_task);

//  routes for deleting tasks
router.delete('/delete/:id',passport.authenticate('jwt',{session:false}),taskcontroller.delete_task);


module.exports = router;