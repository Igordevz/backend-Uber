import { Request, Response } from "express"
import { UserModel } from "../../model/user"

export async function Cadastrar(request: Request, response: Response){
    const  { name, email, password, confirmPassword} = request.body
    const modelUser = new UserModel({
        name, 
        email, 
        password
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
    const AddUser = await UserModel.create(modelUser); 
    return response.status(201).json({ msg: "Usuário Criado." })
}