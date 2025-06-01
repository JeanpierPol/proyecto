import express from 'express';
import authController from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/uploadMiddleware.js';
import { generatePublicUrl } from "../middlewares/generatePublicUrl.js";

const router = express.Router();

router.post('/register', upload.single('avatar'), generatePublicUrl, authController.createUserController);

router.post('/login', authController.loginUserController);

router.get('/verify', authController.verifyToken);


export default router;
