
import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://shreyanshop22:274757@cluster0.izcvhef.mongodb.net/food-del').then(( )=>console.log("DB connected"));
}

//mongodb+srv://shreyanshop22:274757@cluster0.izcvhef.mongodb.net/food-del'
