import { Document } from "mongoose";

export interface Iuser extends Document{

    name: string,
    email: string,
    password: string,
    Emailverfiqued: boolean, 
    Token: string, 
    KeyAtivation: string,
    forgotPassword: string

}

