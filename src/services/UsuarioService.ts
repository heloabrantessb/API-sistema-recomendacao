import { prisma } from "../lib/prisma"

const criarUsuario = async (nome: string, preferencias: number[]) => {
    const usuario = await prisma.usuario.create({
        data: {
            nome,
            preferencias: {
                connect: preferencias.map((id) => ({ id: Number(id) }))
            }
        }
    });
    return usuario;
}

const listarUsuarios = async () => {
    const usuarios = await prisma.usuario.findMany({
        include: {
            preferencias: true
        }
    });
    return usuarios;
}

const editarUsuario = async (id: number, nome?: string, preferencias?: number[]) => {
    const data: any = {};
    if (nome !== undefined) {
        data.nome = nome;
    }
    if (preferencias !== undefined) {
        data.preferencias = {
            set: preferencias.map((id) => ({ id: Number(id) }))
        };
    }

    const usuario = await prisma.usuario.update({
        where: { id },
        data,
        include: {
            preferencias: true
        }
    });

    return usuario;
}

const deletarUsuario = async (id: number) => {
    await prisma.usuario.delete({
        where: { id }
    });
}


export { criarUsuario, listarUsuarios, editarUsuario, deletarUsuario }