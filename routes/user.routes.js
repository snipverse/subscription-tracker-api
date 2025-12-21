import {Router} from 'express';

const userRouter = Router();

// CRUD Operations for User Resource
// / GET /Users - Fetch all users
// / GET /Users/:id - Fetch user details by ID // 123 // 4556

userRouter.get('/', (req, res) => res.send({title: 'Fetch All Users'}));

userRouter.post('/', (req, res) => res.send({title: 'Create New User'}));

userRouter.get('/:id', (req, res) => res.send({title:'User Details'}));

userRouter.put('/:id', (req, res) => res.send({title: 'Update User'}));

userRouter.delete('/:id', (req, res) => res.send({title: 'Delete User'}));

export default userRouter;