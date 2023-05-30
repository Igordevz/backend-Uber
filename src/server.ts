import express from "express";
import { router } from "./routes/router";
import { MongooseConect } from "./config/mongoose";

async function BootStrap() {
    
    const app = express();
    
    app.use(express.json());
    
    
    await MongooseConect();
    app.use(router)
    
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`HTTP Listening ${PORT}`);
    });

}
BootStrap();