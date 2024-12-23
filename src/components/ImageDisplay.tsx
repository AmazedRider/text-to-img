import React from 'react';

interface ImageDisplayProps {
  url: string;
}

export function ImageDisplay({ url }: ImageDisplayProps) {
  return (
    <div className="p-6 bg-gray-50">
      <div className="relative group">
        <img
          src={url}
          alt="Generated artwork"
          className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium hover:bg-white"
        >
          View Full Size
        </a>
      </div>
    </div>
  );
}