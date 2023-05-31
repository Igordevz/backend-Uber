import nodemailer from 'nodemailer'

    const user = process.env.ACESS_EMAIL
    const password = process.env.ACESS_PASS

    export const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail', 
        port: 465,
        secure: true,
        auth: {user: "igortza.98483@gmail.com", pass: "rpwudebayqysebxc" },
    })
    
