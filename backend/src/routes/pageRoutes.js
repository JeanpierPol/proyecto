import express from 'express';
import { createPageController, getPagesByStoryController } from '../controllers/pageController.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const router = express.Router();

router.use(authMiddleware);
router.post("/create", createPageController);
router.get("/:storyId", getPagesByStoryController);

export default router;
