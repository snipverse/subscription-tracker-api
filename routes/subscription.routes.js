import {Router} from 'express';
import authorize from "../middleware/auth.middleware.js";
import { createSubscription , getUserSubscriptions } from "../controller/subscription.controller.js";


const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({title: 'GET All Subscriptions'}));

subscriptionRouter.get('/:id', (req, res) => res.send({title:'GET Subscription Details'}));

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/', (req, res) => res.send({title: 'Update Subscription Details'}));

subscriptionRouter.delete('/:id' , (req, res) => res.send ({title: 'Delete Subscription'}));

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.get('/:id/cancel', (req, res) => res.send({title: 'Cancel User Subscription'}));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title: 'Get Upcoming renewals'}));


export default subscriptionRouter;