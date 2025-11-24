import express from "express";
import { UserControllers } from "./user.controller.js";

const router = express.Router();

router.post("/create", UserControllers.createUser);
router.get("/", UserControllers.getAllUsers);

export const UserRoutes = router;
