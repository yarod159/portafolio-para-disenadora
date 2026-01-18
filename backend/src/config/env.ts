import dotenv from 'dotenv';

// Cargar variables de entorno INMEDIATAMENTE
dotenv.config();

export const config = {
  geminiApiKey: process.env.GEMINI_API_KEY!,
  port: process.env.PORT || '3001',
  nodeEnv: process.env.NODE_ENV || 'development',
};