import { Client } from '@upstash/qstash';
import { QSTASH_TOKEN, QSTASH_URL } from './env.js';

export const workflowClient = new Client({
  token: QSTASH_TOKEN,
  baseUrl: QSTASH_URL || 'https://qstash.upstash.io',
});
