const mongoose=require("mongoose");
const validator=require("validator");


const userschema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLenght:2
    },
    email:{
        type:String,
        require:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
            
            
        }
    },phone:{
        type:Number,
        require:true,
        min:10

    },masseges:{
        type:String,
        require:true,
        
    },

    
});
//we need a collections
const User=mongoose.model("User", userschema);
module.exports = User;