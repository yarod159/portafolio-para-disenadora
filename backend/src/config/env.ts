import dotenv from 'dotenv';

dotenv.config();

export const config = {
  geminiApiKey: process.env.GEMINI_API_KEY!,
  port: process.env.PORT || '3001',
  nodeEnv: process.env.NODE_ENV || 'development',
};
