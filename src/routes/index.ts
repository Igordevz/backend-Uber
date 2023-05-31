import  Router  from "express";
import { Cadastrar } from "../controllers/cadastro/cadastro";
import ValidationEmail from "../repositories/validation_email/validation";


export const router = Router();

router.get("/", (req, res) =>{
    res.send("Welcome Api")
})

router.post("/auth/cadastro", Cadastrar)

router.post("/auth/validation", ValidationEmail)
