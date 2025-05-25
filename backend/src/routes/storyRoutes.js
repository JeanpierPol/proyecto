import express from 'express';
import storyController from '../controllers/storyController.js';

const router = express.Router();

router.get('/', storyController.getStoriesController);
router.post('/', storyController.createStoryController);

export default router;