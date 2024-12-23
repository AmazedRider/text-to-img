import * as fal from '@fal-ai/serverless-client';

export const initializeFal = () => {
  fal.config({
    credentials: import.meta.env.VITE_FAL_KEY,
  });
};