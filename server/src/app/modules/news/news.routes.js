import { Router } from "express";
import { NewsControllers } from "./news.controller.js";

const router = Router();

router.post("/create", NewsControllers.createNews);

export const NewsRoutes = router;
