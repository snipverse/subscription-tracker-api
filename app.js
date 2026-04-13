import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import workflowRouter from "./routes/workflow.routes.js";

import errorMiddleware from "./middleware/error.middleware.js";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows', workflowRouter);

app.get('/health', (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get('/', (req, res) => {
  res.send('Welcome to Subscription Tracker API');
});

app.use(errorMiddleware);

const startServer = async () => {
  try {
    await connectToDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Failed to connect DB:", error.message);
    process.exit(1);
  }
};

startServer();

export default app;