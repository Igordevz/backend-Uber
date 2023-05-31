import { Request, Response } from "express";
import { UserModel } from "../../model/user";

export default async function ValidationEmail(req: Request, res: Response) {
  const { email, key } = req.body;

  if (email == "") {
    res.status(401).json({ msg: "Preencha O Campo do Email" });
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(401).json({ msg: "Email Não Encontrado" });
  }


  if (user?.Emailverfiqued == true) {
    return res
      .status(401)
      .json({ msg: "Seu Email Já Foi Verificado Com Sucesso" });
  }

  if (key == user?.KeyAtivation) {
    const userUpdate = {
      Emailverfiqued: true,
    };

    const EmailTrue = await UserModel.updateOne({ email }, userUpdate);

    return res.status(200).json({ EmailTrue });
  }

  if(key != user?.KeyAtivation){
    return res.status(401).json({ msg: "Chave Não Indentificada" });
  }

  // const ValidationFalse = user.
}
