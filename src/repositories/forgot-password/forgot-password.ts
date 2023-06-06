import { Request, Response } from "express";
import { UserModel } from "../../model/user";
import bycript from "bcrypt";

export default async function ForgotPassword(req: Request, res: Response) {
  const { tokenvalidation, newpassword, confirmNewPassword } = req.body;

  const saltHas = 10;

  const passwordHash = await bycript.hash(newpassword, saltHas);
  if (tokenvalidation.length < 1) {
    return res.status(401).json({ msg: "Insira Um Token Válido" });
  }

  if (newpassword.length < 5) {
    return res
      .status(401)
      .json({ msg: "Sua Senha Deve Conter No Mínimo 5 dígitos" });
  }

  if (newpassword != confirmNewPassword) {
    return res.status(401).json({ msg: "As Senhas Não São Iguais" });
  }

  const updatPassword = {
    forgotPassword: "",
    password: passwordHash,
  };

  const userToken = await UserModel.updateOne(
    { forgotPassword: tokenvalidation },
    updatPassword
  );

  if (userToken.modifiedCount == 0) {
    return res.status(401).json({ msg: "Insira Um Token Válido" });
  }

  res.status(200).json({ msg: "Senha Alterada Com Sucesso" });
}
