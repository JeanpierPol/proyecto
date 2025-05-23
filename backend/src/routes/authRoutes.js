import express from 'express';
import authController from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/uploadMiddleware.js';
import { multerError } from '../middlewares/errorMiddleware.js';

const router = express.Router();

router.post(
  '/register',
  (req, res, next) => {
    upload.single('avatar')(req, res, function (err) {
      multerError(err, req, res, next);
    });
  },
  authController.createUserController
);

router.post('/login', authController.loginUserController);


export default router;
