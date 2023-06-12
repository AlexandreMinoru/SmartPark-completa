import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";
interface CheckCar{
    idUser: number;
}

class CheckUserCarService{
    async execute({idUser}:CheckCar){
        const car = await prismaClient.car.findMany({
            where:{ 
                idUser: idUser
            },
            select:{
                modelo: true,
                fabricante: true,
                placa: true
            }
        })
        if(!car){
            throw new Error("Usuario não encontrado");
        }

        return car
    }
}

export {CheckUserCarService}