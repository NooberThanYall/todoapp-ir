import mongoose from "mongoose";

const connectDB = async () => {
  if(mongoose.connections[0].readyState){
    return true;
  }

  try {
    if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
        throw new Error("Environment variable TOKEN is not defined");
      }
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
    console.log('Mongodb connected')
    return true;
  } catch (error) {
    console.log(error)
  }
}

export default connectDB;