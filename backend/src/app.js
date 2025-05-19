import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500', 'http://localhost:3000'],
  credentials: true
};

app.use(express.json());
app.use(cors(corsOptions));


export default app;
