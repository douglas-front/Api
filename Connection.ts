import mongoose from "mongoose";
import dotenv from 'dotenv';



dotenv.config();

mongoose.set("strictQuery", true);

export async function Main() {
    await mongoose.connect(`${process.env.DBCONNECT}`);

}

Main().catch((err)=> console.log(err));