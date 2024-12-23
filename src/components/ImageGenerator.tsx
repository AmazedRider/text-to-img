import React, { useState } from 'react';
import { PromptInput } from './PromptInput';
import { GenerateButton } from './GenerateButton';
import { ImageDisplay } from './ImageDisplay';
import { generateImage } from '../services/imageService';

export function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError('');

    try {
      const url = await generateImage(prompt);
      setImageUrl(url);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="space-y-6">
            <PromptInput
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={loading}
            />

            <GenerateButton
              onClick={handleGenerate}
              disabled={!prompt.trim() || loading}
              loading={loading}
            />

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}
          </div>
        </div>

        {imageUrl && (
          <div className="border-t border-gray-100">
            <ImageDisplay url={imageUrl} />
          </div>
        )}
      </div>
    </div>
  );
}