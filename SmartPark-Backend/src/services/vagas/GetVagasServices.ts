import prismaClient from "../../prisma";
interface vaga{
    estabelecimento: string
}


class GetVagasServices{
    async execute({estabelecimento }: vaga) {
        const checkEstabelecimento = await prismaClient.vaga.findFirst({
            where:{
                estabelecimento: estabelecimento
            }
        })
        if(!checkEstabelecimento){
            throw new Error("Estabelecimento não encontrado")
            
        }

        const vagas = await prismaClient.vaga.findMany({
            where:{
                estabelecimento: estabelecimento
            }
        })
        return vagas
    }
}
export {GetVagasServices};