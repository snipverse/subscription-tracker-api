import { Router } from "express";

const authRouter = Router();

authRouter.post('/Sign-Up', (req, res) => res.send({title: 'Sign-Up'}));

authRouter.post('/Sign-In', (req, res)=> res.send({title: 'Sign-In'}));

authRouter.post('/Sign-Out', (req, res) => res.send({title: 'Sign-out'}));

export default authRouter;