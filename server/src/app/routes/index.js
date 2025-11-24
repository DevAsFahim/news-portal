import { Router } from "express";
import { NewsRoutes } from "../modules/news/news.routes.js";
import { UserRoutes } from "../modules/user/user.route.js";

const router = Router()

router.use('/news', NewsRoutes)
router.use('/user', UserRoutes)

export const MainRoutes = router;