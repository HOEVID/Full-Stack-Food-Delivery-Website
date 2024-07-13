// to prevent items in cart from getting lost when reloading
import userModel from "../models/userModel.js"

// add items to user cart

const addToCart = async(req,res)=>{
try{
     const userId = req.userId;
let userData= await userModel.findOne({_id:userId});
let cartData =await userData.cartData;
if(!cartData[req.body.itemId]){
    cartData[req.body.itemId]=1;
}
else{
    cartData[req.body.itemId] +=1;
}
await userModel.findByIdAndUpdate(userId,{cartData});
res.json({success:true,message:"Added To Cart"})
}
catch(error){
console.log(error);
res.json({success:false,message:"Error"})
}
}

//remove items from user cart 
const removeFromCart = async(req,res)=>{

}

// fetch user cart data

const getCart = async(req,res)=>{

}

export {addToCart,removeFromCart,getCart}