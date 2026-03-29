import { Router } from "express";
import { criar, listar, editar, deletar } from '../controllers/CategoriaController';
const router = Router();

router.post('/', criar)
router.get('/', listar)
router.patch('/:id', editar)
router.delete('/:id', deletar)

export default router