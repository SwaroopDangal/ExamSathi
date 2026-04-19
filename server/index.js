import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
dotenv.config()

const port = process.env.PORT || 5000;


const app = express()

app.get("/", (req, res) => {
    res.json({ message: "ExamSathi Server is running" })
})




const start = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

start();