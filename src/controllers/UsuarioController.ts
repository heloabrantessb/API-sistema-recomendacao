import { Request, Response } from "express"
import { criarUsuario, deletarUsuario, editarUsuario, listarUsuarios } from "../services/UsuarioService"

const criar = async (req: Request, res: Response) => {
    const { nome, preferencias } = req.body
    const usuario = await criarUsuario(nome, preferencias)

    res.status(200).json(usuario)
}

const listar = async (req: Request, res: Response) => {
    const usuarios = await listarUsuarios()

    res.status(200).json(usuarios)
}

const editar = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const usuario = await editarUsuario(id)

    res.status(200).json(usuario)
}

const deletar = async (req: Request, res: Response) => {
    const id = Number(req.params.id) 
    await deletarUsuario(id)

    res.status(200).json({message: "Usuario deletado com sucesso!"})
}

export {criar, listar, editar, deletar}