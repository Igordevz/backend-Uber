import { Request, Response } from "express"
import { UserModel } from "../../model/user"
import  bycript from "bcrypt"
import { v4 as uuidv4 } from 'uuid';

export async function Cadastrar(request: Request, response: Response){
    const saltHas = 10 


    const  { name, email, password, confirmPassword } = request.body
    const passwordHash = await bycript.hash(password, saltHas )

    const modelUser = new UserModel({
        name, 
        email, 
        password: passwordHash,
        Emailverfiqued: false,
        Token: uuidv4()
    })
    if(password != confirmPassword){
        return response.status(401).json({msg: "Suas Senhas Não Conhecidem"});
    }
    if(name.length < 3){
        return response.status(401).json({msg: "Insira Um Nome Válido"});
    }
    if(email.length < 7){
        return response.status(401).json({msg: "Insira Um Email Válido"});
    }
    if(password.length < 5){
        return response.status(401).json({msg: "Sua Senha Deve Conter 5 dígitos"});
    }

    const UserExit = await UserModel.findOne({ email: email })

    if(UserExit) {
        return response.status(200).json({ msg: "Usuário Já Existe" });
    }
    
    const AddUser = await UserModel.create(modelUser); 
    return response.status(201).json(AddUser)
}