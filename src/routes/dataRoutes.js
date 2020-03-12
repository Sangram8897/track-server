const express = require("express");
const mongoose = require("mongoose");
const requireAuth=require('./src/middleware/requireAuth');
const router=express.Router();
router.post('/info',async(req,res)=>{
    return res.status(200).send('Test Successful :)')
});

module.exports=router;