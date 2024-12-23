import { fal } from '../config/falConfig';

interface FalResponse {
  images: Array<{
    url: string;
  }>;
}

export const generateImage = async (prompt: string): Promise<string> => {
  const result = await fal.subscribe('fal-ai/fast-sdxl', {
    input: {
      prompt,
      negative_prompt: 'blurry, bad quality, distorted',
      num_inference_steps: 50,
    },
  }) as FalResponse;

  if (!result.images?.[0]?.url) {
    throw new Error('No image URL in response');
  }

  return result.images[0].url;
};