const User= require("../models/user");
const jwt=require('jsonwebtoken');
const { validationResult } = require("express-validator");


//  module for signUp the user by there email and password
module.exports.signUp= async function(req,res)
{
    try{
        const error=validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
          }

        let user = await User.findOne({email:req.body.email})
        if (user)
        {
            return res.status(400).json({message:"User already exists"});
        }
         user=await User.create(req.body);
        return res.status(201).json({message:"sucessfully registered user",user});
    }
    catch(err)
    {
        return res.status(400).json(err);
    }


}

//  module for sigIn  the user or creating a  session
module.exports.signIn= async function(req,res)
{
    try{
        const error=validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
          }
        let user = await User.findOne({email:req.body.email})
        if (!user && user.password!=req.body.password)
        {
            return res.status(400).json({message:"Invalid password or email"});
        }
        else
        {
            const jwttoken= jwt.sign(user.toJSON(),process.env.JWT_SECRET ,{expiresIn: "1d" });
            return res.status(201).json({message:"Successfully signIN",jwttoken});
        }

        
    }
    catch(err)
    {
        return res.status(400).json({message:'unable to signIN',err:err});
    }
}