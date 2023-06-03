import { Request, Response } from "express";
import { UserModel } from "../../model/user";

export default async function ForgotPassword(req: Request, res: Response){

    const { tokenvalidation, newpassword } = req.body
    
    const userToken = await  UserModel.findOne({})

    // criar validação por email
}