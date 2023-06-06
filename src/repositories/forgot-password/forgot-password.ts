import { Request, Response } from "express";
import { UserModel } from "../../model/user";

export default async function ForgotPassword(req: Request, res: Response){

    const { tokenvalidation, newpassword, confirmNewPassword } = req.body

    if(tokenvalidation.length < 1){
        return res.status(401).json({ msg: "Insira Um Token Válido" })
    }

    if (newpassword.length < 5) {
        return res
          .status(401)
          .json({ msg: "Sua Senha Deve Conter No Mínimo 5 dígitos" });
      }

    if(newpassword != confirmNewPassword ){
        return res.status(401).json({ msg: "As Senhas Não São Iguais" })
    }

    const updatPassword = {
        forgotPassword: "",
        password: newpassword
    }

    const userToken = await  UserModel.findOne({forgotPassword: tokenvalidation}, updatPassword)

    return res.status(200).json({ msg: "Senha Alterada Com Sucesso"})
}