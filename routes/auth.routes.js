import { Router } from "express";
import { SignUp, SignIn, SignOut } from "../controller/auth.controller.js";

const authRouter = Router();

// -> /api/v1/auth/Sign-Up -> POST BODY -> { name, email, password } -> Create a new user
authRouter.post('/Sign-Up', SignUp );
// -> /api/v1/auth/Sign-In -> POST BODY -> { email, password } -> Sign in user
authRouter.post('/Sign-In', SignIn);

authRouter.post('/Sign-Out', SignOut);

export default authRouter;