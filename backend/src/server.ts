// src/server.ts
import { config } from './config/env.js';
import express from 'express';
import cors from 'cors';
import geminiRouter from './routes/gemini.route.js';
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/gemini', geminiRouter);

app.listen(Number(config.port), () => {
  console.log(`Backend running on http://localhost:${config.port}`);
});