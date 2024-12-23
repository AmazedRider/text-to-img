//import React from 'react';
import { ImageGenerator } from './components/ImageGenerator';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
            AI Image Generator
          </h1>
          <p className="text-gray-600 text-lg">Transform your ideas into stunning artwork</p>
        </div>
        <ImageGenerator />
      </div>
    </div>
  );
}