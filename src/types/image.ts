export interface GeneratedImage {
  url: string;
  seed?: number;
}

export interface ImageGenerationError {
  message: string;
  code?: string;
}