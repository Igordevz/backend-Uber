import { Request, Response } from "express";
import { UserModel } from "../../model/user";
import { v4 as uuidv4 } from "uuid";
import { transport } from "../../config/SendMailer";

export default async function EmailToken(req:Request,res:Response){

    function TokenRecovery() {
        return Math.random().toString(36).slice(-10).substring(0, 7);
    }

    var recoveryCode = Array.apply(null, Array(2)).map(TokenRecovery);

    const { email } = req.body
    const user = await UserModel.findOne({email: email})

    if(user?.email){
        const updatekeyRecovery = {
            forgotPassword: recoveryCode[0],
        }
        const updatUser = await  UserModel.updateMany({email}, updatekeyRecovery)
       
        await transport.sendMail({
            from: `Master`,
            to: email,
            replyTo: "masterevent23@gmail.com",
            subject: "Bem Vindo Ao Nosso Sistema 🚀!!",
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
            
            <head>
                <meta charset="UTF-8">
                <meta content="width=device-width, initial-scale=1" name="viewport">
                <meta name="x-apple-disable-message-reformatting">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta content="telephone=no" name="format-detection">
                <title></title>
                <!--[if (mso 16)]>
                <style type="text/css">
                a {text-decoration: none;}
                </style>
                <![endif]-->
                <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
                <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG></o:AllowPNG>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
                <!--[if !mso]><!-- -->
                <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
                <!--<![endif]-->
            </head>
            
            <body style:"background: white">
                <div class="es-wrapper-color">
                    <!--[if gte mso 9]>
                        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                            <v:fill type="tile" color="#e2eafc"></v:fill>
                        </v:background>
                    <![endif]-->
                    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td class="esd-email-paddings" valign="top">
                                    <table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" align="center">
                                                    <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600" style="border-radius: 20px 20px 0px 0px; background-image: url(https://domcqb.stripocdn.email/content/guids/CABINET_22fda5291d5015a70dd4bd9ba20196304aa67b494a1d67c9ea36ef7797d39dde/images/rectangle_243.png); background-repeat: no-repeat; background-position: left top;" background="https://domcqb.stripocdn.email/content/guids/CABINET_22fda5291d5015a70dd4bd9ba20196304aa67b494a1d67c9ea36ef7797d39dde/images/rectangle_243.png">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p30t es-p15b es-p40r es-p40l es-m-p20r es-m-p20l" align="left">
                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="520" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" align="center">
                                                    <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#edf2fb" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p30t es-p20b es-p40r es-p40l es-m-p20r es-m-p20l" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="es-m-p0r es-m-p20b esd-container-frame" width="520" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-image es-p20" style="font-size: 0px;"><a target="_blank" href="ftp://"><img src="https://domcqb.stripocdn.email/content/guids/CABINET_a0d0f61eb5c43de89624a71f502803dcc3be8b402283f665bed035b137195ecb/images/image.png" alt style="display: block; border-radius: 20px;" width="80"></a></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="es-m-p0r es-m-p20b esd-container-frame" width="560" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0" style="border-radius: 10px; border-collapse: separate; background-color: #ffffff;" bgcolor="#ffffff">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-text es-p30">
                                                                                                    <h1 style="line-height: 150%;">Código De Confirmação</h1>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left" class="esd-block-text es-p30b es-p30r es-p30l">
                                                                                                    <p><strong>Hi ${user?.name},</strong></p>
                                                                                                    <p><br></p>
                                                                                                    <p>Você pediu o código para recuperar sua senha, e atendemos ao seu pedido.&nbsp;</p>
                                                                                                    <p>uber...</p>
                                                                                                    <p style="line-height: 150%;"><br></p>
                                                                                                    <p><strong>Seu Código É:&nbsp;</strong></p>
                                                                                                    <p><br></p>
                                                                                                    <p><br></p>
                                                                                                    <p style="color: #008080; font-size: 22px; text-align: center;"><span style="background-color:#F0F8FF;">${recoveryCode[0]}</span></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" align="center">
                                                    <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p30t es-p30b es-p40r es-p40l es-m-p20r es-m-p20l" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="es-m-p0r es-m-p20b esd-container-frame" width="560" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0" style="border-radius: 10px; border-collapse: separate; background-color: #ffffff;" bgcolor="#ffffff">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" align="center">
                                                    <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600" style="border-radius: 0 0 20px 20px">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p30t es-p30b es-p40r es-p40l es-m-p20r es-m-p20l" align="left">
                                                                    <!--[if mso]><table width="520" cellpadding="0" 
                                    cellspacing="0"><tr><td width="261" valign="top"><![endif]-->
                                                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="261" class="es-m-p20b esd-container-frame" align="left">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--[if mso]></td><td width="20"></td><td width="239" valign="top"><![endif]-->
                                                                    <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="239" align="left" class="esd-container-frame">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--[if mso]></td></tr></table><![endif]-->
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" align="center">
                                                    <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p20t es-p20b es-p40r es-p40l es-m-p20r es-m-p20l" align="left">
                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="520" class="esd-container-frame" align="center" valign="top">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
            </html>`
        })
        return res.status(200).json({msg: "Senha enviada para seu email"})
    }
    if(!user?.email){
        return res.status(401).json({ msg: "Email não encontrado" })
    }
}