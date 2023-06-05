import express from "express";
import { router } from "./routes";
import { MongooseConect } from "./config/mongoose";
import * as dotenv from "dotenv";
dotenv.config();

async function BootStrap() {
    
    const app = express();
    
    app.use(express.json());
    app.use(router)
    
    
    await MongooseConect();
    
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`HTTP Listening ${PORT}`);
    });

}
BootStrap();