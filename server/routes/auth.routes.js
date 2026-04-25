import express from "express";

import { authGoogle, logOut } from "../controllers/auth.controller.js";


const authRouter = express.Router();



authRouter.post("/google", authGoogle)
authRouter.get("/logout", logOut)



export default authRouter;