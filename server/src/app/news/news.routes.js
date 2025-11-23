import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.send('Bismillah')
})

export default router;