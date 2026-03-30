import { Router } from "express";
import { criar, deletar, editar, listar } from "../controllers/LocalController";

const router = Router()

router.post('/', criar)
router.get('/', listar)
router.patch('/:id', editar)
router.delete('/:id', deletar)

export default router