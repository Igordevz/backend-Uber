import { Request, Response } from "express";
import { UserModel } from "../../model/user";
import { v4 as uuidv4 } from "uuid";
export default async function EmailToken(req:Request,res:Response){

    const { email } = req.body

    const user = await UserModel.findOne({email: email})

    if(user?.email){
        const updatekeyRecovery = {
            forgotPassword: uuidv4(),
        }
        const updatUser = await  UserModel.updateMany({email}, updatekeyRecovery)

        return res.status(200).json({msg: "senha enviada para seu email"})
    }
}