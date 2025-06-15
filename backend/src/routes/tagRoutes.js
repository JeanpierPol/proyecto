import express from 'express';
import { getAllTagController } from '../controllers/tagController.js';
const router = express.Router();

router.get('/', getAllTagController);

export default router;