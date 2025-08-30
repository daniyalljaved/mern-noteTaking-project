import express from "express";
import noteRoute from "./Routes/notesRoute.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors"
dotenv.config();

const app=express();
const PORT=process.env.PORT||5001
connectDB();
app.use(cors({
    
    origin:"http://localhost:5173",

}))
app.use(express.json())
app.use("/api/notes",noteRoute)

app.listen(PORT,()=>{
    console.log("5001 server")
});








