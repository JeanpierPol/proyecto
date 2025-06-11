import express from 'express';
import { createPageController, getPagesByStoryController, getPageController } from '../controllers/pageController.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const router = express.Router();

router.post("/create", authMiddleware, createPageController);
router.get("/story/:storyId", getPagesByStoryController);
router.get("/:pageId", getPageController)
export default router;
