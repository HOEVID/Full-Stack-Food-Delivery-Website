import express from "express"
import { addFood } from "../controllers/foodController"
import multer from "multer"

const FoodRouter =express.Router();

//Image Storage Engine
const Storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()} ${file.originalname}` )}
       } )
    
const upload= multer({Storage:storage})

FoodRouter.post("/add",upload.single("image"),addFood)






export default FoodRouter;