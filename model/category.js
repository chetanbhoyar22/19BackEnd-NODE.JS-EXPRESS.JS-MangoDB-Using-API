const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({

    name:{
        type:String,
        trim:true,    // trim : to remove the white spaces 
        required:true,
        unique:true
    },
},
{timestamps:true})

module.exports = mongoose.model("Category",categorySchema); 
