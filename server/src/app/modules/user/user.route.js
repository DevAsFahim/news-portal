import express from "express";
import { UserControllers } from "./user.controller.js";

const router = express.Router();

router.post("/create", UserControllers.createUser);
router.get("/", UserControllers.getAllUsers);
router.get("/:userId", UserControllers.getSingleUsers);
router.put("/:userId", UserControllers.updateUser);
router.get("/delete-user/:userId", UserControllers.deleteUser);

export const UserRoutes = router;
