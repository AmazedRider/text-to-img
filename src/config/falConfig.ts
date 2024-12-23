import * as fal from '@fal-ai/serverless-client';

const FAL_KEY = import.meta.env.VITE_FAL_KEY;

if (!FAL_KEY || !FAL_KEY.includes(':')) {
  throw new Error('Invalid FAL AI API key format. Expected format: key_id:key_secret');
}

fal.config({
  credentials: FAL_KEY,
});

export { fal };