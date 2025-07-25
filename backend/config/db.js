import mongoose from "mongoose";
 
export const connectDB=async()=>{
    await mongoose.connect('mongodb://localhost:27017/foodapp').then(()=>console.log("DB connected"));
}

// export const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/foodapp');
//         console.log("DB connected");
//     } catch (error) {
//         console.log("DB connection failed");
//         console.error(error);
//     }
// };

