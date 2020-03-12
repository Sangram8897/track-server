const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User=mongoose.model('User')
const router=express.Router();
const requireAuth=require('../middleware/requireAuth');
router.post('/info',async(req,res)=>{
    return res.status(200).send('Test Successful :)')
});

module.exports=router;