import express from 'express';
import { createPageController, getPagesByStoryController } from '../controllers/pageController.js';

const router = express.Router();

router.post("/create", createPageController);
router.get("/:storyId", getPagesByStoryController);

export default router;
