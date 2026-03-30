import { prisma } from "../lib/prisma"

const criarRota = async (titulo: string, descricao: string, locais: Number[]) => {
    const rota = await prisma.rota.create({
        data: {
            titulo,
            descricao,
            locais: {
                connect: locais.map((id) => ({id: Number(id)})) 
            }
        }
    });

    return rota
}

const listarRotas = async () => {
    const rotas = await prisma.rota.findMany()

    return rotas
}

const deletarRota = async (id: number) => {
    await prisma.rota.delete({
        where: { id }
    })
}

export { criarRota, listarRotas, deletarRota }