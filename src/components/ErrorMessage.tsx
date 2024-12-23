import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
    {message}
  </div>
);