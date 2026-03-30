import { Request, Response } from "express";
import { criarLocal, listarLocais, editarLocal, deletarLocal} from "../services/LocalService";

const criar = async (req: Request, res: Response) => {
    const { nome, descricao, categorias } = req.body;
    const local = await criarLocal(nome, descricao, categorias);

    res.status(200).json(local);
}

const listar = async (req: Request, res: Response) => {
    const locais = await listarLocais();
    res.status(200).json(locais);
}

const editar = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { nome, descricao, categorias } = req.body;
    const local = await editarLocal(id, nome, descricao, categorias);

    res.status(200).json(local);
}

const deletar = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await deletarLocal(id);

    res.status(200).json({ message: 'Local deletado com sucesso!' });
}

export {criar, listar, editar, deletar}