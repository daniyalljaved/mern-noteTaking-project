import express from "express";
import noteRoute from "./Routes/notesRoute.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import cors from "cors"
dotenv.config();

const app=express();
const PORT=process.env.PORT||5001
const __dirname = path.resolve()

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json())
app.use("/api/notes",noteRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}






connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});






