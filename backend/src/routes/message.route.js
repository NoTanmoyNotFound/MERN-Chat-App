import express, { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();
router.get("/:id", protectRoute,getMessages)
router.get("/users", protectRoute,getUsersForSidebar)

router.post("/send/:id", protectRoute, sendMessage)

export default Router