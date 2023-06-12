import prismaClient from "../../prisma";

class CheckAllVagasServices{
   
    async execute() {
        const vaga = await prismaClient.vaga.findMany()
        return vaga
    }

}

export {CheckAllVagasServices}