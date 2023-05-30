import { connect } from "mongoose";

export async function MongooseConect() {
  try {

    await connect("mongodb+srv://igor:5XGA20teFCI3n58P@cluster0.zkpm25r.mongodb.net/?retryWrites=true&w=majority");
    console.log("Conect Db v");

  } catch (error) {
    console.log(`error na conexão ${error}`);
  }
}
