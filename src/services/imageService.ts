import * as fal from '@fal-ai/serverless-client';

export async function generateImage(prompt: string): Promise<string> {
  try {
    const result = await fal.subscribe('fal-ai/fast-sdxl', {
      input: {
        prompt,
        negative_prompt: 'blurry, bad quality, distorted',
        num_inference_steps: 50,
      },
    });

    if (!result.images?.[0]?.url) {
      throw new Error('No image generated');
    }

    return result.images[0].url;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('Invalid Key Authorization')) {
        throw new Error('Invalid API key. Please check your FAL AI API key format (key_id:key_secret)');
      }
    }
    throw error;
  }
}