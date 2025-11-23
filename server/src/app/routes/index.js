import { Router } from "express";
import { NewsRoutes } from "../modules/news/news.routes.js";

const router = Router()

router.use('/news', NewsRoutes)

export const MainRoutes = router;