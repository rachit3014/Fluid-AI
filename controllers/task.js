const Task=require('../models/task');
const User=require('../models/user');
const { validationResult } = require("express-validator");
//  module for creating a task of the user
module.exports.create_task = async function(req,res)
{
    try {
    
        const error=validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
          }

        req.body.user=req.user.id; // adding user id to request body
        
        const tasks=await Task.create(req.body);
        if (tasks)
        {
            const user=await User.findById(req.user.id); 
            user.tasks.push(tasks);
            user.save();
        }
    return res.status(201).json({message:'sucessfully created',tasks});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'error creating',error: error})
    }
    
   
}


//  module for getting all task of the user
module.exports.get_all_tasks = async function(req, res) {
    try {
        const user = await User.findById(req.user.id) 
        .populate('tasks')
        return res.status(200).json({message:'sucessfully fetched',task:user.tasks});
    } catch (error) {
        return res.status(500).json({message:'error fetching',error: error})
    }
}

//  module for updating the task of the user by its id
module.exports.update_task = async function (req, res) {
    try {
        // Find the task by ID
        const tasks = await Task.findById(req.params.id);

        // if the task exists
        if (!tasks) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // if req.user is the owner of the task
        
        if (tasks.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'You are not authorized to update this task' });
        }

        // Update the task status
        tasks.status = req.body.status;
        await tasks.save();

        return res.status(200).json({
            message: "Successfully updated",
            tasks
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'error updating', error});
    }
}

// module for geting the task of the user by its id
module.exports.get_task_by_id = async function(req,res){
    try {

        const tasks = await Task.findById(req.params.id)
        //  if task is  created by the req.user
        if (tasks.user._id ==req.user.id)
        {
            return res.status(200).json({message:'sucessfully fetched',tasks});
        }
        else{
            return res.status(401).json({message:'you are not authorized to access this task'})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'error fetching', error:error})
    }
}

// module for deleting the task of the user  by its id
module.exports.delete_task = async function (req, res) {
    try {
     
        const task=await Task.findOneAndDelete({_id:req.params.id,user:req.user.id})
        // if task is not found 
        if (!task)
        {
            return res.status(401).json({message:'you are not authorized to delete this task'})
        }
    //     if task is  created by the req.user then updatig user model
        await User.findByIdAndUpdate(req.user.id, { $pull: { tasks: req.params.id}})
        return res.status(200).json({message:'sucessfully deleted'});

    } 
    catch (error) {
       console.log(error);
        return res.status(404).json({
                message:'error deleting',
                error
            });
    }
}