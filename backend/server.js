import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/messages.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js"
import {app,server} from './socket/socket.js'
import path from "path";

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); 
app.use(cookieParser());

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Now you can use __dirname as you would in CommonJS


app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

server.listen(PORT,() => {
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`)
});