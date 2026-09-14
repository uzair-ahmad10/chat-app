import { signup, login, logout, updateProfile } from "../controllers/auth.controller.js";
import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import {arcjetProtection} from "../middlewares/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection);

router.put("/update-profile", protectRoute, updateProfile);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// check user is authenticated or not 
router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user));


export default router;