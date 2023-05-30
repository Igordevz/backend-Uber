import { Schema, model } from "mongoose";
import { Iuser } from "./user.protocolls";

const UserSchema = new Schema<Iuser>({

    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    Emailverfiqued: {type: Boolean}, 
    Token: {type: String, required: true}

})

export const UserModel =  model<Iuser>("user", UserSchema);