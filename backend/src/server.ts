import express from 'express';
import cors from 'cors';
import path from 'path';
import geminiRouter from './routes/gemini.route.js';
import { config } from './config/env.js';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/gemini', geminiRouter);


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (${config.nodeEnv})`);
});
