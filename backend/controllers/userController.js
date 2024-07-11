import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user

const loginUser=async(req,res)=>{

}
//register user
const registerUser=async(req,res)=>{
const {name,password,email}=req.body;
try{
    //checking user already exists
    const exits= await userModel.findOne({email})
    if(exists){
        return res.json({success:false,message:"User already exists"})
    }
    //validating email format and strong password
    if(!validator.isEmail(email)){
        return res.json({success:false,message:"Please enter a valid email"})
    }
    if(password.length<8)
        return res.json({success:false,message:"please enter a stronger password "})
    const salt =await bcrypt.genSalt(10)
    const hashedPassword =await bcrypt.hash(password,salt);

    const newUser =new userModel({
        name:name,
        email:email,
        password:hashedPassword
    })
    const user = await newUser.save()
}

catch(error){
    
}
}

export {loginUser,registerUser}