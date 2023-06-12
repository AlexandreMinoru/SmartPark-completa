import prismaClient from "../../prisma";

interface vaga{
    vagaID: number,
    status: number
}

class AlterStatusService{
    
    async execute({ vagaID, status }: vaga) {
        const checkVaga = await prismaClient.vaga.findFirst({
            where:{
                vagaID: vagaID
            }
        })
        if(!checkVaga){
            throw new Error("vaga não existe")
        }

        const alterStatus = await prismaClient.vaga.update({
            where: {
                vagaID: vagaID
            },
            
            data:{
                Status: status
            }
            

        })
        const texto = "A vaga com id:" + vagaID+ " foi alterada para o status:" + status
        return texto
    }
}

export {AlterStatusService}