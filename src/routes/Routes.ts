import { Router } from "express";
import categorias from './categoria.routes'
import usuarios from './usuario.routes'

const router = Router();

router.get('/health', (req, res) => (
    res.status(200).json({
        status:'OK',
        message:'Servidor Rodando'
    })
));

router.use('/categorias', categorias)
router.use('/usuarios', usuarios)

export default router;

