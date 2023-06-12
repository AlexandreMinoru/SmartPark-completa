import prismaClient from "../../prisma";
interface CarInsert{
    idUser: number;
    placa: string;
    modelo: string;
    fabricante: string;
}  

class CreateCarService{
    async execute({idUser, placa, modelo, fabricante}: CarInsert){
        const user = await prismaClient.car.findFirst({
            where:{
                placa: placa
            }


        })
        if(user){
            throw new Error("carro já cadastrado");
        }
        const car = await prismaClient.car.create(
            {
                data: {
                    idUser: idUser,
                    placa: placa,
                    modelo: modelo,
                    fabricante: fabricante
                },
                select: {
                    idUser: true,
                    placa: true,
                    modelo: true
                }
            }
        )
        return car
    }
}

export {CreateCarService}