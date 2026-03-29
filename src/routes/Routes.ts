import { Router } from "express";
import categoriaRoutes from './categoria.routes'

const router = Router();

router.get('/health', (req, res) => (
    res.status(200).json({
        status:'OK',
        message:'Servidor Rodando'
    })
));

router.use('/categorias', categoriaRoutes)

export default router;

