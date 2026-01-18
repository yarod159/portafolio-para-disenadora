import { Router } from 'express';
import { generateIdeas, listAvailableModels } from '../services/gemini.service.js';

const router = Router();

router.get('/models', async (req, res) => {
  try {
    const models = await listAvailableModels();
    res.json({ models });
  } catch (error) {
    console.error(' Error listing models:', error);
    res.status(500).json({ 
      message: 'Failed to list models',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

router.post('/', async (req, res) => {

  
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ message: 'Topic is required' });
  }

  try {
    const data = await generateIdeas(topic);
    res.json(data);
  } catch (error) {
    console.error(' Error:', error);
    
    res.status(500).json({ 
      message: 'AI generation failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
