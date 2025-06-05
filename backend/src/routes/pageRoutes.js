import express from 'express';
import { createPageController, getPagesByStoryController } from '../controllers/pageController.js';

const router = express.Router();

router.post("/story/create", createPageController);
router.get("/story/:storyId", getPagesByStoryController);

export default router;
