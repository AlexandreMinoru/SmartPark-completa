import prismaClient from "../../prisma";
interface vaga{
    vagaId: number
}

class DeleteVagasService{
    async execute({vagaId }: vaga) {

        const checkVaga = await prismaClient.vaga.findFirst({
            where:{
                vagaID: vagaId
            }
        })
        if(!checkVaga){
            throw new Error("vaga não existe")
        }
        const vaga = await prismaClient.vaga.delete({
            where:{
                vagaID: vagaId
            }
        })
        const texto = "A vaga com id:" + vagaId + " foi removida";
        return texto
    }
}

export {DeleteVagasService}