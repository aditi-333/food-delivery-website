import express from "express"
import { addFood,listFood,removeFood } from "../controllers/foodController.js"
import multer from "multer"
//using foodRouter we can create get,post and many other methods
const foodRouter=express.Router();

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

//we use post to send method on the server,data will be processed on server and it will give a response
//if we fill a form, the form data will be sent using post method, useful for uploading a file
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);


export default foodRouter;