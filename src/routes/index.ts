import  Router  from "express";
import { Cadastrar } from "../controllers/cadastro/cadastro";
import ValidationEmail from "../repositories/validation_email/validation";
import Login from "../controllers/login/login";
import EmailToken from "../repositories/forgot-password/emailtoken";

export const router = Router();

router.get("/", (req, res) =>{
    res.send("Welcome Api")
})
router.post("/auth/cadastro", Cadastrar)

router.post("/auth/validation", ValidationEmail)

router.post("/auth/login", Login)

router.post("/token/forgot-password", EmailToken)
