const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User=mongoose.model('User')
const router=express.Router();
router.post('/signup',async(req,res)=>{
    const {country_code,phone_number,password}=req.body;
    try{
        const user=new User({country_code,phone_number,password});
        await user.save()
        const token=jwt.sign({userId:user._id},'SECRETE_KEY',{expiresIn:'1 hour'})
        res.send({token});
    }
    catch(err)
    {
       return res.status(422).send(err.message)
    }
})
module.exports=router;