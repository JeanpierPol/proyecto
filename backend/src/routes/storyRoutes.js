import express from 'express';
import storyController from '../controllers/storyController.js';
import { upload } from '../middlewares/uploadMiddleware.js';
import { generatePublicUrl } from "../middlewares/generatePublicUrl.js";
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', storyController.getStoriesController);
router.get('/:id', storyController.getStoryController)
router.get('/user/:id', storyController.getStoryByUserController);

router.post('/create', upload.single('coverImg'), generatePublicUrl, authMiddleware, storyController.createStoryController);

export default router;