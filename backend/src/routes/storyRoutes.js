import express from 'express';
import storyController from '../controllers/storyController.js';
import { multerError } from '../middlewares/errorMiddleware.js';
import { upload } from '../middlewares/uploadMiddleware.js';


const router = express.Router();

router.get('/', storyController.getStoriesController);
router.post(
    '/create',
    (req, res, next) => {
        upload.single('coverImg')(req, res, function (err) {
            multerError(err, req, res, next);
        });
    },
    storyController.createStoryController
);

export default router;