import dotenv from 'dotenv';

// Determine which .env file to load based on NODE_ENV
const nodeEnv = process.env.NODE_ENV || 'development';
const envFile = `.env.${nodeEnv}.local`;

// Load the environment-specific file
dotenv.config({ path: envFile });

export const PORT = process.env.PORT || 3000;
export const NODE_ENV = nodeEnv;
export const DB_URI = process.env.DB_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';
export const ARCJET_ENV = process.env.ARCJET_ENV || 'development';
export const ARCJET_KEY = process.env.ARCJET_KEY || '';