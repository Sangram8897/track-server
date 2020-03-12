const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User=mongoose.model('User')
const router=express.Router();
router.post('/signup',async(req,res)=>{
    const {country_code,phone_number,password}=req.body;
    try{
        const user=await new User({country_code,phone_number,password});
        await user.save()
        // const token=jwt.sign({userId:user._id},'SECRETE_KEY',{expiresIn:'1 hour'})
        // res.send({token});
        return res.status(200).send('SignUp Successful :)')
    }
    catch(err)
    {
       return res.status(422).send(err.message)
    }
});
router.post('/signin',async(req,res)=>{
           
    const {country_code,phone_number,password}=req.body;
    if(!country_code || !phone_number || !password)
    {
        return res.status(422).send({
            err:'Must provide email and password lavdu'
        })
    }
    const user= await User.findOne({
        phone_number:phone_number
    });
    console.log(user)
    if(!user)
    {
        return res.status(422).send({
            err:'phone not found'
        })
    }
    try{
        await user.comparePassword(password);
        const token=jwt.sign({userId:user._id},'SECRETE_KEY',{expiresIn:'1 hour'})
        res.send({token});
    }
    catch(err)
    {
        return res.status(422).send({
            err:'Invalid Password or Email'
        })
    }
    
});
module.exports=router;