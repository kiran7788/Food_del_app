import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.ocpb5.mongodb.net/Fooddel?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
