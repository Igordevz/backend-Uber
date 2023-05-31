import  Router  from "express";
import { Cadastrar } from "../controllers/cadastro/cadastro";


export const router = Router();

router.get("/", (req, res) =>{
    res.send("Welcome Api")
})

router.post("/auth/cadastro", Cadastrar)
