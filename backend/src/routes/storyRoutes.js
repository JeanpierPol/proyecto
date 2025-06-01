import express from 'express';
import storyController from '../controllers/storyController.js';
import { upload } from '../middlewares/uploadMiddleware.js';
import { generatePublicUrl } from "../middlewares/generatePublicUrl.js";


const router = express.Router();

router.get('/', storyController.getStoriesController);
router.post('/create', upload.single('coverImg'), generatePublicUrl, storyController.createStoryController);

export default router;