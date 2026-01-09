import { Router } from 'express';
import {sendReminders} from "../controller/workflow.controller.js";

const workflowRouter = Router();

workflowRouter.post('/subscription/reminders', sendReminders);

export default workflowRouter;