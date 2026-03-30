import { prisma } from "../lib/prisma"

const criarLocal = async (nome: string, descricao:string, categorias: Number[]) => {
    const local = await prisma.local.create({
        data: {
            nome,
            descricao,
            categorias: {
                connect: categorias.map((id) => ({ id: Number(id) }))
            }
        }
    });

    return local
}

const listarLocais = async () => {
    const locais = await prisma.local.findMany()

    return locais;
}

const editarLocal = async (id: number, nome:string, descricao:string, categorias: Number[]) => {
    const local = await prisma.local.update({
        where: { id },
        data: {
            nome,
            descricao,
            categorias: {
                connect: categorias.map((id) => ({ id: Number(id) }))
            }
        }
    })
}

const deletarLocal = async (id: number) => {
    await prisma.local.delete({
        where: { id }
    })
}

export default { criarLocal, listarLocais, editarLocal, deletarLocal }