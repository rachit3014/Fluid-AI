const mongoose = require('mongoose');
// creating userSchema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tasks:
        [
           {     type: mongoose.Schema.Types.ObjectId,
                 ref:'Task'
            }
        ]
    
});
//  creating user model
const User=mongoose.model('User',userSchema);
module.exports = User;