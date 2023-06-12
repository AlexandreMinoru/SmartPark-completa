import prismaClient from "../../prisma";
interface Vaga{
    estabelecimento: string,
    andar: number,
    status: number
}

class CreateVagasService{
    async execute({ estabelecimento, andar, status }: Vaga) {
        const vaga = await prismaClient.vaga.create({
            data:{
                estabelecimento: estabelecimento,
                andar: andar,
                Status: status
            }
        })
        return vaga
    }
}

export {CreateVagasService}