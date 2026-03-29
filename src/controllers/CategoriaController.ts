import type { Request, Response } from "express";
import categoriaService from "../services/CategoriaService";

const criar = async (req: Request, res: Response) => {
    const { titulo } = req.body;

    if(!titulo) return res.status(400).json({message: 'titulo é obrigatório'})

    const categoria = await categoriaService.criarCategoria(titulo);
    res.status(200).json(categoria)
}

const listar = async (req: Request, res: Response) => {
    const categorias = await categoriaService.listarCategorias();
    res.status(200).json(categorias)
}

const editar = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const { titulo } = req.body

    const categoria = await categoriaService.editarCategoria(id, titulo)

    res.status(200).json(categoria)
}

const deletar = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    await categoriaService.deletarCategoria(id)

    res.status(200).json({messase: 'Categoria deletada com sucesso!'})
}

export { criar, listar, editar, deletar }