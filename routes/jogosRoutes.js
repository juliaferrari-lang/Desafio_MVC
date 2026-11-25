// routes/jogosRoutes.js
import { Router } from "express";
import {
    getJogos,
    getJogosPorFabricante,
    getJogosPorAno,
    getJogosPorId,
    postJogo,
    putJogo,
    deleteJogo
} from "../controllers/jogosControllers.js";

const router = Router();

router.get("/", getJogos);
router.get("/fabricante/:fabricante", getJogosPorFabricante);
router.get("/ano/:ano", getJogosPorAno);
router.get("/:id", getJogosPorId);
router.post("/", postJogo);
router.put("/:id", putJogo);
router.delete("/:id", deleteJogo);

export default router;