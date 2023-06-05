import { connect } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export async function MongooseConect() {
  try {
    await connect(`mongodb+srv://igor:${process.env.ACESS_PASS_DB}@cluster0.zkpm25r.mongodb.net/?retryWrites=true&w=majority`);
    console.log("Conect Server Database");
  } catch (error) {
    console.log(`error na conexão ${error}`);
  }
}
