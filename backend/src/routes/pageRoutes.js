import express from 'express';
import { createPageController, getPageController, getPageByUserController } from '../controllers/pageController.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const router = express.Router();

router.post("/create", authMiddleware, createPageController);
router.get("/:pageId", getPageController)
router.get("/user/:userId", getPageByUserController);
export default router;
