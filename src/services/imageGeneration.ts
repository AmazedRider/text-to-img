import * as fal from '@fal-ai/serverless-client';

fal.config({
  credentials: import.meta.env.VITE_FAL_KEY,
});

export const generateImage = async (prompt: string): Promise<string> => {
  try {
    const result = await fal.subscribe('fal-ai/fast-sdxl', {
      input: {
        prompt,
        negative_prompt: 'blurry, bad quality, distorted',
        num_inference_steps: 50,
      },
    });

    return result.images[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate image');
  }
};