import * as fal from '@fal-ai/serverless-client';

export function initializeFalAI() {
  const apiKey = import.meta.env.VITE_FAL_KEY;
  
  if (!apiKey || !apiKey.includes(':')) {
    throw new Error('Invalid FAL AI API key format. Expected format: key_id:key_secret');
  }

  fal.config({
    credentials: apiKey,
  });
}