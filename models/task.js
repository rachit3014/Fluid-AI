const mongoose = require('mongoose');
//  creating task schema
const taskSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    // date:{
    //     type:Date,
    //     default:Date.now
    // },
    status:{
        type:String,
        enum:["pending", "in progress", "completed"],
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

})
// creating task model
const Task=mongoose.model('Task',taskSchema);
module.exports = Task;