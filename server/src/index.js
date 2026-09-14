import express, { json } from "express";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js"
import {ENV} from "./lib/env.js"


// instance of express
const app = express();

// fetching the port from .env file
const PORT = ENV.PORT || 4000;

// middlewares 
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ENV.CLIENT_URL,
    credentials: true
}));

// Routes
app.use("/api/auth",authRoute);
app.use("/api/messages", messageRoute);


app.listen(PORT, ()=>{

    console.log(`Server is working  at Port: ${PORT}`);
    connectDB();
})