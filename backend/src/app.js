import express from 'express';
import cors from 'cors';
import path, { join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cookieParser from 'cookie-parser';


import authMiddleware from './middlewares/authMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import storyRoutes from './routes/storyRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.resolve(__dirname, '../../frontend');
const uploadPath = path.resolve(__dirname, '../uploads');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
};

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());


app.use('/api/auth', authRoutes);
app.use('/api/story', authMiddleware, storyRoutes)

app.use('/uploads', express.static(uploadPath));


export default app;
