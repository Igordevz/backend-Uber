import nodemailer from 'nodemailer'
import * as dotenv from "dotenv";
dotenv.config();

    const user = process.env.ACESS_EMAIL
    const password = process.env.ACESS_PASS

    export const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail', 
        port: 465,
        secure: true,
        auth: {user: user, pass: password},
    })
    
