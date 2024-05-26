import express from "express"
import { login, logout, signup} from "../controllers/auth.controllers.js"

const router = express.Router();

router.post("/signup",(req,res,next)=> {console.log('hello');next();}, signup);

router.post("/login", login);

router.post("/logout", logout);



export default router;