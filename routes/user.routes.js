import {Router} from 'express';
import { getUsers, getUser } from "../controller/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

// CRUD Operations for User Resource
// / GET /Users - Fetch all users
// / GET /Users/:id - Fetch user details by ID // 123 // 4556

userRouter.get('/', authorize, getUsers);

userRouter.get('/:id', authorize, getUser);

export default userRouter;