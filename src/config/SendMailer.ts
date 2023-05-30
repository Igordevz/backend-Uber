import nodemailer from 'nodemailer'

    const user = process.env.ACESS_EMAIL
    const password = process.env.ACESS_PASS

    // configurar sendmailer para envio de emails em massa

    export const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {user: user, pass: password },
    })