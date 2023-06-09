import { Request, Response } from "express";
import { UserModel } from "../../model/user";

import bycript from "bcrypt";
export default async function Login(req: Request, res: Response) {
  
  const { email, password }:any = req.body;

  try {
    const passwordHash: any = await UserModel.findOne({
      email: email,
    });
    const passwordCheked = await bycript.compare(
      password,
      passwordHash?.password
    );
    if (!passwordCheked) {
      return res.status(401).json({ msg: "Email Ou Senhas Não Conhecidem" });
    }
    if (passwordCheked) {
      return res.status(200).json(passwordHash);
    }

  } catch (error) {
    return res.status(401).json({ msg: "Email Ou Senhas Não Conhecidem" });
  }
}
