import Subscription from '../models/subscription.model.js';
import { SERVER_URL } from '../config/env.js';
import { workflowClient } from '../config/upstash.js';

export const createSubscription = async (req, res, next) => {
  try{
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    // Schedule reminder workflow - don't fail subscription creation if scheduling fails
    try {
      await workflowClient.publishJSON({
        url: `${SERVER_URL}/api/v1/workflows/subscription/reminders`,
        body: {
          subscriptionId: subscription._id
        },
        headers: {
          'Content-Type': 'application/json',
        },
        retries: 0,
      });
    } catch (qstashError) {
      console.warn('Failed to schedule reminder workflow:', qstashError.message);
      // Continue - subscription was created successfully
    }

    res.status(201).json( { success: true, data: subscription } );

  }catch(e){
    next(e);
  }
}

export const getUserSubscriptions = async (req, res, next) => {
  try{
    //check if the user is same as the one in the token
    if(!req.user._id.equals(req.params.id)) {
      const error = new Error('You are not the owner of this account');
      error.status = 401;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.params.id });

    res.status(200).json( { success: true, data: subscriptions } );
  }catch(e){
    next(e);
  }
}