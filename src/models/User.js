const mongoose = require("mongoose");
const userSchema=new mongoose.Schema({
    country_code:{
        unique:true,
        type:String,
        required:true 
    },
    phone_number:{
        unique:true,
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

mongoose.model('User',userSchema);

