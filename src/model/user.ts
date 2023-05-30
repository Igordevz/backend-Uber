import { Schema, model } from "mongoose";
import { Iuser } from "./user.protocolls";

const UserSchema = new Schema<Iuser>({

    name: {type: String},
    email: {type: String},
    password: {type: String},

})

export const UserModel =  model<Iuser>("user", UserSchema);