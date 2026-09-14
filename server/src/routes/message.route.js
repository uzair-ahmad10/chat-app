import express from "express";
import { getAllContacts, getMessagesByUserId, sendMessage, getChatPartners } from "../controllers/message.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection, protectRoute);

router.get("/contacts", getAllContacts);
router.get("/:id", getMessagesByUserId);
router.post("/send/:id", sendMessage);
router.get("/chats", getChatPartners);

export default router;


