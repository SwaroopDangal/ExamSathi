import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";


dotenv.config()

const port = process.env.PORT || 5000;


const app = express()

// CORS
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// Middlewares
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

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