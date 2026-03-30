import { prisma } from "../lib/prisma"

const criarCategoria = async (titulo: string) => {
    const categoria = await prisma.categoria.create({
        data: {titulo}
    });

    return categoria
}

const listarCategorias = async () => {
    const categorias = await prisma.categoria.findMany();

    return categorias
}

const editarCategoria = async (id: number, titulo?: string) => {
    const categoria = await prisma.categoria.update({
        where: { id },
        data: {
            titulo
        }
    })

    return categoria
}

const deletarCategoria = async (id: number) => {
    await prisma.categoria.delete({
        where: { id }
    })
}

export default { criarCategoria, listarCategorias, editarCategoria, deletarCategoria }