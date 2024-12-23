import { fal } from '../config/falConfig';

interface FalResponse {
  images: Array<{
    url: string;
  }>;
}

export const generateImage = async (prompt: string): Promise<string> => {
  try {
    const result = await fal.subscribe('fal-ai/fast-sdxl', {
      input: {
        prompt,
        negative_prompt: 'blurry, bad quality, distorted',
        num_inference_steps: 50,
      },
    }) as FalResponse;

    return result.images[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate image');
  }
};