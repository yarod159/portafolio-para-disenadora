import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from '../config/env.js';

const genAI = new GoogleGenerativeAI(config.geminiApiKey);


const MODELS_TO_TRY = [
  'gemini-3-flash',
  'gemini-2.5-flash'
];

export async function listAvailableModels() {
  return MODELS_TO_TRY.map(name => ({
    name,
    status: 'Will try in order'
  }));
}

export async function generateIdeas(topic: string) {

  let lastError: Error | null = null;

  
  for (const modelName of MODELS_TO_TRY) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
      });

    const prompt = `
You are a professional social media strategist.

Create a high-performing social media content plan for the topic:
"${topic}"

Target platform: Instagram / TikTok
Content format: Short-form video (30–60 seconds)
Tone: Clear, modern, engaging, and practical
Language: Spanish

Return ONLY a valid JSON object with the following exact structure:

{
  "hook": "One short, scroll-stopping opening line (max 12 words)",
  "outline": [
    "Clear and actionable point 1",
    "Clear and actionable point 2",
    "Clear and actionable point 3"
  ],
  "caption": "A concise caption (max 2 sentences) with a soft call-to-action"
}

Rules:
- Do NOT include emojis
- Do NOT include hashtags
- Do NOT include explanations or extra text
- Content must be realistic and usable for real creators
- Avoid generic marketing phrases
`;

      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();

      const cleanText = text
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();

      const parsed = JSON.parse(cleanText);
      console.log('Parsed response:', parsed);

      return parsed;
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      console.log(`Model ${modelName} failed: ${errorMsg}`);
      lastError = error as Error;
    
    }
  }

  
  console.error(' All models failed!');
  throw new Error(
    `All models failed. Last error: ${lastError?.message || 'Unknown error'}. ` +
    'Your API key might not have access to these models.'
  );
}
